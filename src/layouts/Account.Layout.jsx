import React from "react";
import { Outlet } from "react-router";
import AccountSideBar from "../components/accounts/SideBar";

export default function AccountLayout() {
  return (
    <div className="grid grid-cols-12 gap-x-10 bg-[#F8F9FA] w-full">
      
      <div className="col-span-3 w-full h-screen bg-red-">
        <div className="fixed h-screen w-full">
          <AccountSideBar />
        </div>
      </div>

      <div className="col-span-9 mx-auto w-full z-50 ">
        <Outlet />
      </div>
    </div>
  );
}
