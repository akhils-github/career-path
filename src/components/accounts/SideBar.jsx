import React from "react";
import { useLocation } from "react-router";

export default function AccountSideBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="bg-[#1E3964] h-screen w-full items-center flex flex-col py-3">
      <div className="py-4">
        <img src="/logo/seekats_logo.svg" alt="" className="w-40 " />
      </div>
      <div className="flex flex-col   justify-center py-2 gap-y-2  h-full text-white">
        <div className="flex gap-2 items-center">
          <div className="size-8 rounded-full">
            {pathname === "/" ? (
              <img src="/icons/multi-circle.svg" alt="" className="w-24" />
            ) : (
              <img src="/icons/tick-circle.svg" alt="" className="w-20" />
            )}
          </div>
          <div>
            {pathname === "/" ? (
              <>
                <p className="text-sm whitespace-nowrap font-bold">
                  Start your new career journey!
                </p>
                <p className="text-xs">
                  Welcome to the world of opportunities.
                </p>
              </>
            ) : (
              <p className="text-[#FFFFFF99] text-sm">Account Created!</p>
            )}
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-4 border-dashed  h-16"></div>
        <div className="flex gap-2 items-center">
          <div className="w-8 flex items-center justify-center">
            {pathname === "/profile-create" ? (
              <div className="rounded-full size-10">
                {pathname === "/profile-detail" ? (
                  <img src="/icons/tick-circle.svg" alt="" className="w-24" />
                ) : (
                  <img src="/icons/multi-circle.svg" alt="" className="w-24" />
                )}
              </div>
            ) : pathname === "/profile-detail" ? (
              <div className="rounded-full size-10">
                <img src="/icons/tick-circle.svg" alt="" className="w-20" />
              </div>
            ) : (
              <div className="bg-[#FFFFFF99] rounded-full size-6" />
            )}
          </div>
          <div>
            {pathname === "/profile-create" ? (
              <div className="">
                <p className="text-sm font-bold">Well begun is half done.</p>
                <p className="text-xs">Fill the details to start</p>
              </div>
            ) : pathname === "/profile-detail" ? (
              <p className="text-[#FFFFFF99]">Well begun is half done.</p>
            ) : (
              <p className="text-[#FFFFFF99]">Well begun is half done.</p>
            )}
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-4 border-dashed  h-16"></div>

        <div className="flex gap-2 items-center">
          <div className="w-8 flex justify-center items-center ">
            {pathname === "/profile-detail" ? (
              <div className="rounded-full size-8">
                <img src="/icons/multi-circle.svg" alt="" className="w-24" />
              </div>
            ) : (
              <div className="bg-[#FFFFFF99] rounded-full size-5" />
            )}
            {/* <div className="bg-[#FFFFFF99] rounded-full size-6"></div> */}
          </div>
          {pathname === "/profile-detail" ? (
            <div className="">
              <p className="text-sm font-bold">Get noticed faster</p>
              <p className="text-xs">
                Fill additional details to get attracged by employers faster.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-[#FFFFFF99] text-sm">Get noticed faster</p>
            </div>
          )}
        </div>

        <div className="border-gray-400 border-r-2 w-4 border-dashed  h-16"></div>

        <div className="flex gap-2 items-center">
          <div className="w-8 flex justify-center items-center ">
            <div className="bg-[#FFFFFF99] rounded-full size-5"></div>
          </div>
          <div className="text-[#FFFFFF99]">
            <p className="text-sm ">Welcome to your</p>
            <p className="text-sm"> Dashboard!Your profile is ready.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <img src="/images/account/job-hunt.png" alt="" className="w-36" />
      </div>
    </div>
  );
}
