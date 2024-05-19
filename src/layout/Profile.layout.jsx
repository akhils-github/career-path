import React from "react";
import { Outlet } from "react-router-dom";
import LoginSideBar from "../components/auth/SideBar";

export default function ProfileLayout() {
  return (
    <div className="flex bg-[#F8F9FA] w-full overflow-hidden">
      <div>
        <LoginSideBar />
      </div>
      <Outlet />
    </div>
  );
}
