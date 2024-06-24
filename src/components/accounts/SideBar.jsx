import React from "react";

export default function AccountSideBar() {
  return (
    <div className="bg-[#1E3964] h-screen w-[23rem] items-center flex flex-col py-3">
      <div className="py-8">
        <img src="/logo/seekats_logo.svg" alt="" className="w-56" />
      </div>
      <div className="flex flex-col   justify-center py-2 gap-y-2  h-full text-white">
        <div className="flex gap-2 items-center">
          <div className="size-10 rounded-full">
            <img src="/icons/multi-circle.svg" alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-5 border-dashed  h-20"></div>
        <div className="flex gap-2 items-center">
          <div className="w-10 flex items-center justify-center">
            <div className="bg-[#FFFFFF99] rounded-full size-6"></div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="border-gray-400 border-r-2 w-5 border-dashed  h-20"></div>

        <div className="flex gap-2 items-center">
          <div className="w-10 flex justify-center items-center ">
            <div className="bg-[#FFFFFF99] rounded-full size-6"></div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <img src="public/images/account/job-hunt.png" alt="" className="w-40" />
      </div>
    </div>
  );
}
