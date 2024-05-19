import React from "react";
import ProfileProgress from "./progress/ProfileProgress";
import Man from "/images/sidebar/man.png";

export default function LoginSideBar() {
  return (
    <div className="bg-[#1E3964] h-screen w-[23rem] px-16">
      <div className="py-8">
        <img src="/logo/seekats_logo.svg" alt="" className="w-44" />
      </div>
      <div>
        <ProfileProgress />
      </div>
      <div className="mt-14">
        <img src={Man} alt="" className="w-40" />
      </div>
    </div>
  );
}
