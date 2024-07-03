import React from "react";
import UserHeader from "../components/headers/UserHeader";
import UserNavBar from "../components/navbars/UserNavBar";
import { Outlet } from "react-router";

export default function ProfileLayout() {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <UserNavBar />
    </div>
  );
}
