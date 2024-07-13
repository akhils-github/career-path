import { Camera } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import Tick from "/images/profile/tick-circle.svg";
export default function ProfileHeader() {
  return (
    <div className="z-[99999] ">
      <div className="-mt-12 overflow-y-min mx-auto rounded ">
        {/* search */}
        <div className="text-[#2c2c2c] rounded-md px-5 bg-white gap-4 flex pt-5 pb-5 h-44  shadow">
          <div className="-mt-12 relative p-3 bg-white w-40  rounded shadow-md">
            <img className=" cursor-pointer w-full h-full object-contain rounded" src="/images/tony.png"  />
            <label htmlFor="upload" className="bg-[#275DF5] cursor-pointer rounded-full text-white size-10 flex items-center justify-center absolute right-0 -bottom-0">
              <Camera />
            </label>
            <input type="file" hidden className="hidden" id="upload" />
          </div>
          <div className="bg-[#275DF51A] flex flex-col px-5 pt-2 rounded w-[85%]">
            <div>
              <h3>Forrest Gump</h3>
              <p>Graphic Designer at Ghd Global</p>
            </div>
            <div className="flex gap-2">
              <div>
                <p>Sadasd, Bahrain</p>
              </div>
              <div>
                <p>walapa@getmola.com</p>
              </div>
              <div>
                <p>+2343 - 453453453</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#FCAF3233]"></div> */}
        </div>
      </div>
    </div>
  );
}
