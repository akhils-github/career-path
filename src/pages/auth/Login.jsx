import React from "react";
import GoogleLoginPage from "../../components/auth/Google";
import LinkedInLoginButton from "../../components/auth/Linkedin";
import FacebookLoginPage from "../../components/auth/Facebook";
import LoginSideBar from "../../components/auth/SideBar";
import { ArrowRight, MoveRight } from "lucide";

export default function Login() {
  return (
    <>
      <div className=" bg-red-70s0 w-full px-20">
        <p className="flex justify-end w-full  gap-1.5 text-sm py-4">
          Already Registered? <span className="text-[#275DF5]">Login </span>{" "}
          here
        </p>

        <div className="bg-[#FFFFFF] rounded lg:px-20 md:px-6 py-4 shadow-md w-10/12  ">
          <h3 className="font-bold text-lg px-3 my-1.5">
            Create account faster using
          </h3>
          <div className="flex gap-4 py-2.5 px-3 items-center">
            <div>
              <FacebookLoginPage />
            </div>
            <div>
              <GoogleLoginPage />
            </div>
            <div>
              <LinkedInLoginButton />
            </div>
          </div>
          <div class="h-4 border-b relative border-[#0000004D] text-[#0000004D] text-xl mx-3">
            <span class="bg-white absolute left-44 px-3 ">Or</span>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div
                // onSubmit={handleSubmit(onSubmit)}
                className="grid w-full grid-cols-1 gap-y-2 mt-4"
              >
                <div className="flex px-3 group flex-col space-y-2 ">
                  <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Enter your personal Email ID"
                    // {...register("name", { required: true })}
                    className="rounded-md border border-[#C7C7C7] w-full px-2 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                  {/* {errors.name && (
                      <span className="text-xs font-medium text-red-500">
                        {errors.name?.message}
                      </span>
                    )} */}
                </div>
                <div className="flex px-3 group flex-col space-y-2">
                  <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                    Create Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Create a password for Acountz account"
                    // {...register("owner", { required: true })}
                    className="rounded-md border border-[#C7C7C7] w-full px-2 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                  {/* {errors.owner && (
                      <span className="text-xs font-medium text-red-500">
                        {errors.owner?.message}
                      </span>
                    )} */}
                </div>
                <div className="flex px-3 group flex-col space-y-2">
                  <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                    What is your experience level?
                  </label>
                  <div className="flex gap-3 py-1.5">
                    <span className="px-3 border rounded-full py-0.5">
                      I have work experience
                    </span>
                    <span className="px-3 border rounded-full py-0.5">
                      I am a fresher
                    </span>
                  </div>
                  <label
                    htmlFor="file"
                    className="rounded border  border-dashed flex gap-2 justify-center items-center h-16 bg-[#4F7BF71A] border-[#275DF5]"
                  >
                    <input
                      id="file"
                      autoComplete="off"
                      type="file"
                      // {...register("owner", { required: true })}
                      className="hidden w-full "
                    />
                    <span className="text-[#275DF5] font-semibold">Browse</span>
                    file to upload
                  </label>
                  <span className="text-xs font-medium text-[#00000080]">
                    Supported file formats: doc, docx, pdf, rtf | upto 2 MB
                  </span>
                  <div className="flex  gap-2">
                    <input type="checkbox" />
                    <span className="text-xs font-medium text-[#00000080]">
                      I agree to Terms and Conditions & Privacy Policy governing
                      the user of accountz.com
                    </span>
                  </div>
                  {/* {errors.owner && (
                      <span className="text-xs font-medium text-red-500">
                        {errors.owner?.message}
                      </span>
                    )} */}
                </div>

                <div className="bg-[#1E3964] mt-6 h-8 w-48 rounded-full text-sm px-2 flex items-center text-white gap-2">
                  <span>Create Account for Free</span>
                  {/* <MoveRight /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
