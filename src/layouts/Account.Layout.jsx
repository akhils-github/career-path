import React from "react";
import { Outlet } from "react-router";
import AccountSideBar from "../components/accounts/SideBar";

export default function AccountLayout() {
  return (
    <div className="h-screen w-screen bg-[#F8F9FA] flex">
      <div className="hidden flex-[0.3] relative lg:flex items-center justify-center">
        <AccountSideBar />
      </div>

      <div className="flex-1 lg:flex-[0.7]  w-full h-screen overflow-y-auto overflow-y-min">
        <Outlet />
      </div>
    </div>
  );
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
