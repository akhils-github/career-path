import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import AccountSideBar from "../components/accounts/SideBar";
import { useUserStore } from "../lib/user";
import { decodeToken } from "../utils/tokenValidate";
import { useQuery } from "@tanstack/react-query";
import { GET_USER, newRequest } from "@/api";

export default function AccountLayout() {
  const pathName = useLocation();
  const { setUser } = useUserStore((state) => state);
  const pathWithoutLayout = pathName?.pathname.includes("");

  //   if (isAccess) {
  //     setUser(user);
  //   }

  let token = localStorage.getItem("resData");
  const removeToken = () => {
    localStorage.removeItem("resData");
  };

  // GET USER
  const { data, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await newRequest.get(GET_USER + "/");
        setUser(res.data);
        return res.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          removeToken();
          throw error; // Re-throw the error for proper handling
        }
        throw error; // Re-throw other errors
      }
    },
    enabled: !!token,
  });

  console.log(data);

  // if (data) {
  //   setUser(data);
  //   // dispatch(setProfile(data?.data))
  // }

  return token ? (
    <div className="h-screen w-screen bg-[#F8F9FA] flex overflow-hidden">
      <div className="hidden bg-[#1E3964] flex-[0.3] h-full  relative lg:flex items-center justify-center">
        <AccountSideBar />
      </div>
      <div className="flex-1 lg:flex-[0.7]  w-full">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"sign-in"} />
  );
}
