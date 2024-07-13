import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import AccountSideBar from "../components/accounts/SideBar";
import { useUserStore } from "../lib/user";
import { decodeToken } from "../utils/tokenValidate";

export default function AccountLayout() {
  const pathName = useLocation();
  const isAccess = decodeToken() || pathWithoutLayout;

  const { setUser } = useUserStore((state) => state);
  let user = JSON.parse(localStorage.getItem("resData"));
  useEffect(() => {
    if (isAccess) {
      setUser(user);
    }
  }, [isAccess]);

  const pathWithoutLayout = pathName?.pathname.includes("sign-up");

  console.log(isAccess);
  return isAccess ? (
    <div className="h-screen w-screen bg-[#F8F9FA] flex">
      <div className="hidden bg-[#1E3964] flex-[0.3] h-full  relative lg:flex items-center justify-center">
        <AccountSideBar />
      </div>

      <div className="flex-1 lg:flex-[0.7]  w-full h-full  overflow-y-auto overflow-y-min">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"sign-in"} />
  );
}
