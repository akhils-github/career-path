import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function EducationDetails() {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className=" py-4 px-4 bg-white  rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              Icon
            </div>
            <div>
              <h3 className="font-bold">Education Details</h3>
            </div>
          </div>
          <div className=" text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        </div>
        <div className="ml-16 py-3 px-2 mr-8 bg-[#E9EFFE]  rounded-md">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">
                  Bachelor of Arts, Arts&Humanities
                </h3>
                <p className="text-sm">URS Institute, Kuwait.</p>
                <p className="text-xs">Year of Passing : 2015</p>
              </div>
            </div>
            <div className="flex gap-5 pr-5">
              <div
                onClick={() => setIsEdit(!isEdit)}
                className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
              >
                <span>Edit</span>
                <Pen className="size-2 fill-[#275DF5]" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" bg-[#E9EFFE]  rounded-md">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">
                  Bachelor of Arts, Arts&Humanities
                </h3>
                <p>URS Institute, Kuwait.</p>
                <p className="text-sm">Year of Passing : 2015</p>
              </div>
            </div>
            <div className="flex gap-5 pr-5">
              <div
                onClick={() => setIsEdit(!isEdit)}
                className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
              >
                <span>Edit</span>
                <Pen className="size-2 fill-[#275DF5]" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
