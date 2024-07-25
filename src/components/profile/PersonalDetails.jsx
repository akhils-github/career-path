import React, { useState } from "react";

export default function PersonalDetails() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=" bg-white  rounded-md px-4 py-3">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              Icon
            </div>
            <div>
              <h3 className="font-bold pb-4">Personal Details</h3>
            </div>
          </div>
          {!isEdit && (
            <div className=" text-blue-600 pr-5">
              <div
                onClick={() => setIsEdit(true)}
                className="flex gap-1 border border-blue-600 rounded-full px-2"
              >
                Edit
                <span>
                  <div className="w-3 pt-2">
                    <img src="/images/edit.png" alt="" />
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>
        {!isEdit ? (
          <div className="rounded-md pl-20">
            {/* <div className="flex justify-between"> */}
            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
              <div className=" ">
                <p className="text-sm">Date of Birth</p>
                <p>August 17, 1997</p>
              </div>

              <div className="">
                <p className="text-sm">Gender</p>
                <p>Male</p>
              </div>
              <div className="">
                <p className="text-sm">Nationality</p>
                <p>Qatari</p>
              </div>
              <div className="">
                <p className="text-sm">Maritel Status</p>
                <p>Married</p>
              </div>
              <div className="">
                <p className="text-sm">Driving License</p>
                <p>Yes (Kuwait)</p>
              </div>
              <div className="">
                <p className="text-sm">Current Location</p>
                <p>Dubai, UAE</p>
              </div>
              <div className="">
                <p className="text-sm">Visa Status for Current Location</p>
                <p>Visit Visa</p>
              </div>
              <div className="">
                <p className="text-sm">Visa Expiry</p>
                <p>January 2025</p>
              </div>
              <div className="">
                <p className="text-sm">Language Known</p>
                <p>Arabic</p>
              </div>
              <div className="">
                <p className="text-sm">Religion</p>
                <p>Jainism</p>
              </div>
              <div className="">
                <p className="text-sm">Alternate Email Address</p>
                <p>erdfghgh@fdgjh.com</p>
              </div>
              <div className="">
                <p className="text-sm">Alternate Contact Number</p>
                <p>+324 - 123456789908</p>
              </div>
              <div>
                <p className="text-sm">LinkedIn URL</p>
                <a href="#" className="text-sm text-blue-600">
                  https://www.linkedin.com
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-16 max-w-2xl flex flex-col gap-y-3">
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Date of Birth
              </label>
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-40 h-10 rounded-md px-2"
                type="date"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Gender
              </label>

              <div className="flex gap-4">
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 flex items-center justify-center">
                  Male
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 px-2 flex items-center justify-center">
                  Female
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Nationality
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Marital Status
              </label>

              <div className="flex gap-4">
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 flex items-center justify-center">
                  Single
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 px-2 flex items-center justify-center">
                  Married
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-24 px-2 flex items-center justify-center">
                  Divorced
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-24 px-2 flex items-center justify-center">
                  Widow(er)
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 px-2 flex items-center justify-center">
                  Other
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Do you have a Driving License ?
              </label>
              <div className="flex gap-4">
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 flex items-center justify-center">
                  Yes
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full w-20 px-2 flex items-center justify-center">
                  No
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Driving License issued from
              </label>
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Current Location
              </label>
              <div className="grid grid-cols-3 gap-x-3">
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                What is your visa status in the residing Country ?
              </label>

              <div className="flex gap-x-3 gap-y-2 flex-wrap">
                <div className="border border-[#3467F6]  h-8 rounded-full px-3 flex items-center justify-center">
                  Citizen / Bahraini
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                  Visit Visa / Entry Visa
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                  Student Visa
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                  Work Visa / Employment Visa
                </div>
                <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                  Dependent Visa / Family Visa Other
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Visa Expiry
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Languages Known (Max 3)
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Religion
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Alternate Email Address
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Alternate Contact Number
              </label>
              <div className="flex items-center gap-3">
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-20 h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                LinkedIn URL
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>

            <div className="flex gap-4 px-3 my-6">
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
  );
}
