import { Camera } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import Tick from "/images/profile/tick-circle.svg";
export default function ProfileHeader({ userData }) {
  console.log(userData);
  return (
    <div className="w-full">
      <div className="-mt-12 overflow-y-min mx-auto rounded ">
        {/* search */}
        <div className="text-[#2c2c2c] rounded-md px-5 bg-white gap-4 flex pt-5 pb-5 h-44  shadow">
          <div className="-mt-12 relative p-3 bg-white w-40  rounded shadow-md">
            <img
              className=" cursor-pointer w-full h-full object-contain rounded"
              src="/images/tony.png"
            />
            <label
              htmlFor="upload"
              className="bg-[#275DF5] cursor-pointer rounded-full text-white size-10 flex items-center justify-center absolute right-0 -bottom-0"
            >
              <Camera />
            </label>
            <input type="file" hidden className="hidden" id="upload" />
          </div>
          <div className="bg-[#275DF51A] flex flex-col px-5 pt-2 rounded w-[85%]">
            <div>
              <h3>
                {userData?.first_name} {userData?.middle_name}
                {userData?.last_name}
              </h3>
              {/* <p> {userData?.state}</p> */}
            </div>
            <div className="flex gap-2">
              <div>
                <p>
                  {/* {userData?.state}, {userData?.country} */}
                </p>
              </div>
              <div>
                <p>{userData?.email}</p>
              </div>
              <div>
                <p>{userData?.mobile_number}</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#FCAF3233]"></div> */}
        </div>
      </div>
    </div>
  );
}
