import React from "react";
import { useLocation } from "react-router";

export default function AccountSideBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="bg-[#1E3964] h-screen w-[26rem] items-center flex flex-col py-3">
      <div className="py-8">
        <img src="/logo/seekats_logo.svg" alt="" className="w-56 " />
      </div>
      <div className="flex flex-col  w-[300px]  justify-center py-2 gap-y-2  h-full text-white">
        <div className="flex gap-2 items-center">
          <div className="size-10 rounded-full">
            {pathname === "/" ? (
              <img src="/icons/multi-circle.svg" alt="" className="w-24" />
            ) : (
              <img src="/icons/tick-circle.svg" alt="" className="w-20" />
            )}
          </div>
          <div>
            <p>Start your new career journey!</p>
            <p className="text-sm">Welcome to the world of opportunities.</p>
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-5 border-dashed  h-20"></div>
        <div className="flex gap-2 items-center">
          <div className="w-10 flex items-center justify-center">
            {pathname === ("/profile-create") ? (
              <div className="rounded-full size-10">
                {pathname === "/profile-detail" ? (
                  <img src="/icons/tick-circle.svg" alt="" className="w-24" />
                ) : (
                  <img src="/icons/multi-circle.svg" alt="" className="w-24" />
                )}
              </div>
            ) : (
              <div className="bg-[#FFFFFF99] rounded-full size-6" />
            )}
          </div>
          <div>
            <p>Well begun is half done.</p>
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-5 border-dashed  h-20"></div>

        <div className="flex gap-2 items-center">
          <div className="w-10 flex justify-center items-center ">
            <div className="bg-[#FFFFFF99] rounded-full size-6"></div>
          </div>
          <div>
            <p>Get noticed faster</p>
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-5 border-dashed  h-20"></div>

        <div className="flex gap-2 items-center">
          <div className="w-10 flex justify-center items-center ">
            <div className="bg-[#FFFFFF99] rounded-full size-6"></div>
          </div>
          <div>
            <p className="text-base">Welcome to your</p>
            <p> Dashboard!Your profile is ready.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <img src="public/images/account/job-hunt.png" alt="" className="w-40" />
      </div>
    </div>
  );
}
