import React from "react";

export default function ProfileProgress({ status }) {
  return (
    <div className="bg-white rounded h-24 flex flex-col gap-2 justify-center px-10">
      <p className="text-sm font-semibold">{status}% Profile Completed</p>
      {/* <progress
        className="progress progress-error bg-[#D9D9D991] w-full h-4"
        value="25"
        max="100"
      ></progress> */}
      {status === 10 ? (
        <div className="w-full h-6 rounded-full px-2 bg-[#D9D9D991] flex items-center ">
          <p className="h-2.5 w-1/3 bg-[#D75B5B] rounded-full "></p>
        </div>
      ) : (
        <div className="w-full h-6 rounded-full px-2 bg-[#D9D9D991] flex items-center ">
          <p className="h-2.5 w-1/2 bg-[#FEC000] rounded-full "></p>
        </div>
      )}
    </div>
  );
}
