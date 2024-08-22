import React from "react";
import UserHeader from "../components/headers/UserHeader";
// import UserNavBar from "../components/headers/UserNavBar";
import { Outlet } from "react-router";
import ProfileFooter from "../components/footer/ProfileFooter";
import { useQuery } from "@tanstack/react-query";
import { GET_USER, newRequest } from "@/api";
import { useUserStore } from "@/lib/user";

export default function ProfileLayout() {
  const { setUser } = useUserStore((state) => state);
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
  return token? (
    <div className="bg-gray-200">
      <UserHeader />
      <div className="px-20  mx-auto">
        <Outlet />
      </div>
      {/* <UserNavBar /> */}
      <ProfileFooter/>
    </div>
  ): (
    <Navigate to={"sign-in"} />
  );
}
