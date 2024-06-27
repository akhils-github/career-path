import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-5/12">
        <img src="/logo/seekats-logo-blue.svg" alt="" />
        <div className="bg-white shadow px-8 py-5 rounded-md my-3">
          <div className="mb-10">
            <p className="text-2xl font-semibold">Login your Account</p>
            <p className="text-sm">
              Please select a strong, new password that you have not used
              before.
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-y-3 my-3">
              <label htmlFor="">UserName</label>
              <input
                type="text"
                name=""
                id=""
                className="rounded h-10 w-full border border-[#D4D4D4] px-2"
              />
            </div>
            <div className="flex flex-col gap-y-3 my-3">
              <label htmlFor="">Password</label>
              <div className="flex items-center justify-between rounded h-10 gap-2 px-2 border border-[#D4D4D4]">
                <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id=""
                  className="px-2 w-full h-full"
                />
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(false)} className="cursor-pointer text-[#B5B5B5] "/>
                ) : (
                  <EyeOff onClick={() => setShowPassword(true)} className="cursor-pointer text-[#B5B5B5]"/>
                )}
              </div>
            </div>
            <div className="bg-[#1E3964] text-white rounded-full w-56 mx-auto mt-4 h-10 flex justify-center items-center">
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
