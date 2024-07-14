import React from "react";
import UserHeader from "../components/headers/UserHeader";
// import UserNavBar from "../components/headers/UserNavBar";
import { Outlet } from "react-router";
import ProfileFooter from "../components/footer/ProfileFooter";

export default function ProfileLayout() {
  return (
    <div className="bg-gray-200">
      <UserHeader />
      <div className="px-20  mx-auto">
        <Outlet />
      </div>
      {/* <UserNavBar /> */}
      <ProfileFooter/>
    </div>
  );
}
