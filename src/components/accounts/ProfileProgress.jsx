import { useUserStore } from "@/lib/user";
import React from "react";

export default function ProfileProgress({ status }) {
  const { user } = useUserStore((state) => state);
  console.log(user)
  return (
    <div className="bg-white py-6 rounded h-24 flex flex-col gap-2 justify-center px-10">
      <p className="text-sm font-semibold">{user?.progress}% Profile Completed</p>
      {/* <progress
        className="progress progress-error bg-[#D9D9D991] w-full h-4"
        value="25"
        max="100"
      ></progress> */}
      {user?.progress === 10 ? (
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
