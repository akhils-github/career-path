import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import AccountSideBar from "../components/accounts/SideBar";

export default function AccountLayout() {
  const pathName = useLocation();
  const pathWithoutLayout = pathName?.pathname.includes("sign-up");
  const decodeToken = () => {
    let token = localStorage.getItem("access_token");
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      const decoded = JSON.parse(jsonPayload);
      const currentTime = Math.floor(Date.now() / 1000);

      return decoded.exp > currentTime;
    } catch (error) {
      console.error("Invalid token format", error);
      return null;
    }
    // return JSON.parse(jsonPayload);
  };
  const isAccess = decodeToken() || pathWithoutLayout;
  return isAccess ? (
    <div className="h-screen w-screen bg-[#F8F9FA] flex">
      <div className="hidden bg-[#1E3964] flex-[0.3] h-full relative lg:flex items-center justify-center">
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
