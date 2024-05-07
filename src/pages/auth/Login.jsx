import React from "react";
import GoogleLoginPage from "../../components/auth/Google";
import LinkedInLoginButton from "../../components/auth/Linkedin";
import FacebookLoginPage from "../../components/auth/Facebook";

export default function Login() {
  return (
    <div className="bg-[#1E3964]">
      <div className="flex flex-col-3 ">
        <div className=" col-span-1 w-1/3 h-full bg-[#1E3964]">
          <div className="flex justify-center bg-[#1E3964]">
            <img className="w-64 px-8 py-12" src="/images/seekats.png" alt="" />
          </div>
          <div className="flex items-center pb-3">
            {/* Dashed timeline */}
            <div className=" border-gray-300 ml-24">
              <div className="container">
                <div className="flex text-white justify-items-start px-5">
                  <div className="">
                    <div className="ml-4">
                      <h3 className=" font-medium text-lg">
                        Start your new career journey!<br></br>
                      </h3>
                      <h5 className="text-sm text-gray-200">
                        Welcome to the world of opportunities
                      </h5>
                    </div>
                    <h4 className="ml-4 pt-7 text-gray-400">
                      Well begun is half done.
                    </h4>
                    <h4 className="ml-4 pt-6 text-gray-400">
                      Get attracted faster
                    </h4>
                    <h4 className="ml-4 pt-6 text-gray-400">
                      Welcome to your Dashboard!<br></br>
                      Your profile is ready
                    </h4>
                  </div>
                  {/* <ul className="timeline timeline-vertical">
                    <li>
                      <div className=" timeline-start circle">
                        <h5 className="text-sm text-gray-400">
                          Account Created!
                        </h5>
                      </div>
                    </li>
                    <li className="timeline-middle">
                      <h4 className=" pt-7 text-gray-400">
                        Well begun is half done.
                      </h4>
                    </li>
                    <li>
                      <h4 className="text-lg pt-6 text-white">
                        Get noticed faster
                      </h4>
                      <p className=" text-sm text-gray-400">
                        Fill additional deatils to get attracted by employers
                        faster.
                      </p>
                    </li>
                    <h4 className=" pt-6 text-gray-400">
                      Welcome to your Dashboard!<br></br>
                      Your profile is ready
                    </h4>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-32 items-center bottom-4">
            <img className=" h-60" src="/images/man.png" alt="" />
          </div>
        </div>
        <div className="col-span-2 w-2/3 bg-slate-300 items-center">
          <div className="flex justify-end pr-8 items-center pt-4">
            <h4 className=" items-center text-center">
              Already Registered?{" "}
              <a href="#" className="text-blue-600">
                Login
              </a>{" "}
              here
            </h4>
          </div>
          <div className="mt-6 ml-8 mr-8 rounded-md bg-[#fff] text-left px-48 pb-5">
            <h4 className="text-[#000000] font-semibold pt-8 text-lg">
              Create account faster using
            </h4>
            <div className="flex items-center pt-6 gap-3 border-b-2 pb-4 pr-2">
              <GoogleLoginPage />

              <FacebookLoginPage />

              <LinkedInLoginButton />
            </div>
            <p className="text-center">or</p>
            <div className="text-sm">
              {/* <div className="flex col-span-6"> */}
              <form className=" font-medium">
                <label For="email">Email ID</label>
                <br></br>
                <input
                  className="border w-[450px] pt-1 pb-1 mb-4 items-center px-2 rounded-md mt-1"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your personal Email id"
                />
                <br></br>
                <label className="mb-3" For="email">
                  Create Password
                </label>
                <br></br>
                <input
                  className="border w-[450px] pt-1 pb-1 mb-4 rounded-md items-center px-2 mt-1"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a password for SeekATS account"
                />
                <br></br>
                <label className="mb-3" For="email">
                  Confim Password
                </label>
                <br></br>
                <input
                  className="border w-[450px] pt-1 pb-1 mb-4 rounded-md items-center px-2 mt-1"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Cofirm a password for SeekATS"
                />
                <br></br>
                <label className="" For="text">
                  Tell us about your status of experience
                </label>
                <div className="flex gap-3 mt-2 w-[580px] h-6">
                  <button className="border border-[#9b9595] px-2 rounded-full">
                    Have work experience
                  </button>
                  <button className="border border-[#9b9595] rounded-full px-4">
                    Fresher, NO work experience
                  </button>
                </div>
                <p></p>
                <div class="mb-2 mt-3">
                  <label
                    htmlFor="uploadCV"
                    className="bg-[#4F7BF71A] flex gap-2 h-16 w-[450px] items-center justify-center rounded outline-dashed outline-[#275DF5]"
                  >
                    <img className="h-6" src="/images/upload.png" alt="" />
                    <p class=" text-gray-400 font-normal">
                      <span className="text-blue-400"> Browse</span> files to
                      upload
                    </p>
                    <input type="file" id="uploadCV" className="hidden" />
                  </label>
                  {/* <span className="mb-3">Upload CV (optional)</span> */}
                  {/* <div class="mt-3 relative h-16 w-[450px] rounded-lg border-dashed border-2 border-blue-400 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div class="absolute">
                      <div class="flex gap-2 items-center ">
                        <img className="h-6" src="/images/upload.png" alt="" />
                        <span class="block text-gray-400 font-normal">
                          <span className="text-blue-400"> Browse</span> files
                          to upload
                        </span>
                      </div>
                    </div>
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div> */}
                  <div class="flex justify-between items-center text-gray-400 text-sm">
                    <span>
                      Supported file formats:doc, pdf, docx | upto 2 MB
                    </span>
                  </div>
                  <div className="flex gap-3 pt-6 text-gray-400">
                    <input type="checkbox" name="" id="" />
                    <p>
                      I agree to
                      <span className="text-blue-500">
                        {" "}
                        Terms and Conditions
                      </span>{" "}
                      & <span className="text-blue-500">Privacy Policy</span> of
                      seekats.com
                    </p>
                  </div>
                  <div className="flex gap-2 bg-[#1E3964] w-fit pt-2 pb-2 rounded-full text-white px-2 mt-16 mb-10">
                    <button>Create Yout Account</button>
                    <img src="/images/arrow.png" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
