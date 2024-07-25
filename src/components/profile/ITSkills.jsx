import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function ITSkills() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=" bg-white px-4 py-4 rounded-md">
      <div className="flex justify-between  w-full">
        <div className="flex gap-4 w-full ">
          <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
            Icon
          </div>
          <div className=" w-full">
            <h3 className="font-bold w-full col-span-3">
              IT Skills / Certifications
            </h3>
            {!isEdit ? (
              <div className="grid grid-cols-3 gap-y-3 gap-x-4 w-full">
                <div className=" bg-[#E9EFFE] py-3  px-2 rounded-md">
                  <div className="flex gap-1 justify-between">
                    <div className="">
                      <p>Java J2EE</p>
                      <p>2023</p>
                      <p className="text-sm">2 Years 2 Months</p>
                    </div>
                    <div
                      onClick={() => setIsEdit(!isEdit)}
                      className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
                    >
                      <span>Edit</span>
                      <Pen className="size-2 fill-[#275DF5]" />
                    </div>
                  </div>
                </div>
                <div className=" bg-[#E9EFFE] py-3  px-2  rounded-md">
                  <div className="flex gap-1 justify-between">
                    <div className="ml-4">
                      <p>Java J2EE</p>
                      <p>2023</p>
                      <p className="text-sm">2 Years 2 Months</p>
                    </div>
                    <div
                      onClick={() => setIsEdit(!isEdit)}
                      className="border-2 cursor-pointer rounded-full w-fit px-1.5 h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
                    >
                      <span>Edit</span>
                      <Pen className="size-2 fill-[#275DF5]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md flex flex-col gap-y-3 my-4">
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Skill / Certification Name
                  </label>
                  <input
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                    type="text"
                    placeholder="Tell us your industry"
                  />
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Last Used
                  </label>

                  <input
                    className="border border-[#407FFF] bg-[#E9EFFE] w-40 h-10 rounded-md px-2"
                    type="text"
                    placeholder="Tell us your Sub-industry"
                  />
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Total Experience
                  </label>
                  <div className="flex items-center gap-x-3">
                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-20 h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                    <p className="text-sm">Year</p>
                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-20 h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                    <p className="text-sm">Months</p>
                  </div>
                </div>

                <div className="flex gap-4 px-2 my-4">
                  <button className="h-10 w-24  bg-[#1E3964] rounded-full text-white flex items-center justify-center">
                    Save
                  </button>

                  <div
                    onClick={() => setIsEdit(false)}
                    className="h-10 w-24 border cursor-pointer border-[#1E3964] rounded-full text-[#1E3964] flex items-center justify-center"
                  >
                    Cancel
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isEdit && (
          <div className="w-20 text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
