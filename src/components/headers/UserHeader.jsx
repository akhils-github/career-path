import {
  ArrowRight,
  Bell,
  ChevronDown,
  Power,
  KeySquare,
  ShoppingCart,
  Search,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function UserHeader() {
  return (
    <header className="w-full bg-white  py-4 bg-left bg-cover bg-no-repeat h-52  text-[#1E3964] ">
      <div className="flex justify-between px-14">
        <Link
          to=""
          //   to={customerProfile?.firstname ? "/customer" : "/"}
          className="w-36 h-8 my-auto"
        >
          <img src="/logo/seekats-logo-blue.svg" alt="" />
        </Link>
        <nav className="flex items-center gap-4 text-[#1E3964]">
          <div className="flex cursor-pointer flex-col">
            <span className="text-[0.9rem] capitalize font-semibold">Home</span>
          </div>
          <div className="flex cursor-pointer flex-col">
            <span className="text-[0.9rem] capitalize font-semibold">Jobs</span>
          </div>

          <div className="flex cursor-pointer flex-col">
            <Search className="w-4 h-4" />
          </div>

          <div className="px-2 py-1 w-10 relative flex items-center justify-center h-10">
            <div className="w-2 h-2 absolute right-2 top-1 bg-green-600 rounded-full" />
            <Bell className="w-4 h-4" />
          </div>
          {/* {customerProfile?.firstname ? ( */}
          <>
            <Menu as="div" className="relative">
              <Menu.Button>
                <div className="border border-white/20 py-1 px-2 rounded-full flex gap-3 items-center w-40 h-12 text-[#1E3964]">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt=""
                  />
                  <div className="flex cursor-pointer flex-col">
                    <span className="text-[0.9rem] capitalize font-semibold">
                      Robert
                      {/* {customerProfile?.firstname} {customerProfile?.lastname} */}
                    </span>
                    {/* <span className="text-[0.61rem] font-normal">Customer</span> */}
                  </div>
                  <ChevronDown className="size-5" />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute text-[#777777] font-medium right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 pt-3 pb-2 text-[0.9rem] text-gray-700"
                        )}
                      >
                        Profile Management
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-[0.9rem] text-gray-700"
                        )}
                      >
                        Manage Account
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={() => {
                        localStorage.removeItem("utoken");
                        navigate("/auth/customer/login");
                      }}
                      className="bg-[#BF464608] px-4 py-3 w-full flex text-sm  items-center  justify-center text-[#D12323] font-medium"
                    >
                      <Power className="h-4" />
                      Logout
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        </nav>
      </div>

      <div className="bg-[#1e3964] w-full h-full  -z-50"></div>
      {/* <div className="bg-gray-200 pl-10 pr-10 pt-36 pb-10">
      <div className="grid grid-cols-3">
        <div className=" col-span-2">
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="px-2 w-12">
                  <img src="/images/file.png" alt="" />
                </div>
                <div>
                  <h3 className="font-bold">CV Headline</h3>
                  <h6 className="pt-2">
                    Graphic Designer in Construction / Civil Engineering in
                    Sadasd
                  </h6>
                </div>
              </div>
              <div className=" text-blue-600 pr-5">
                <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                  Edit
                  <span>
                    <div className="w-3 pt-2">
                      <img src="/images/edit.png" alt="" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="w-12 px-2">
                  <img src="/images/keyskills.png" alt="" />
                </div>
                <div>
                  <h3 className="font-bold">Key Skills</h3>
                  <div className="flex text-blue-600  pt-4 gap-4">
                    <div className="flex gap-2 border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                    <div className="flex gap-2 border border-blue-600 rounded-full px-3">
                      <button className="">illustrator</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-blue-600 pr-5">
                <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                  Edit
                  <span>
                    <div className="w-3 pt-2">
                      <img src="/images/edit.png" alt="" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="w-12 px-2">
                  <img src="/images/file.png" alt="" />
                </div>
                <div>
                  <h3 className="font-bold pb-4">Professional Summary</h3>
                  <p className=" pb-2">Career Snapshot</p>
                  <h6 className="pb-4">
                    Reference site about Lorem Ipsum, giving information on
                    its origins, as well as a random Lipsum <br></br>
                    generator.
                  </h6>
                  <div className="flex gap-16">
                    <div className="pb-4">
                      <p>Total Work Experience</p>
                      <p>2 Years 7 Months</p>
                    </div>
                    <div className="pb-4">
                      <p>Total Gulf Experience</p>
                      <p>2 Years 7 Months</p>
                    </div>
                    <div className="pb-4">
                      <p>Current / Latest Monthly salary</p>
                      <p>AED 20,000</p>
                    </div>
                  </div>
                  <p className="pb-4">Major Achievements / Projects</p>
                  <p className="pb-4">
                    Reference site about Lorem Ipsum, giving information on
                    its origins, as well as a random Lipsum <br></br>
                    generator.
                  </p>
                  <p className="pb-2">Honors and Awards</p>
                  <p className="pb-4">
                    Reference site about Lorem Ipsum, giving information on
                    its origins, as well as a random Lipsum <br></br>
                    generator.
                  </p>
                </div>
              </div>
              <div className=" text-blue-600 pr-5">
                <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                  Edit
                  <span>
                    <div className="w-3 pt-2">
                      <img src="/images/edit.png" alt="" />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div>
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="w-12 px-2">
                    <img src="/images/employment.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold pb-4">Professional Summary</h3>
                  </div>
                </div>
                <div className=" text-blue-600 pr-5">
                  <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                    Edit
                    <span>
                      <div className="w-3 pt-2">
                        <img src="/images/edit.png" alt="" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-4 mr-8 ml-16 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="w-12 px-2">
                      <img src="/images/ellipse.png" alt="" />
                    </div>
                    <div>
                      <h3 className=" font-medium">Graphic Designer</h3>
                      <p>RS Group of companies, Sadasd, Kuwait.</p>
                      <p className="text-sm">( Retail, Fashion )</p>
                      <p className="pt-2">Job Description</p>
                      <p className="text-sm">
                        Reference site about Lorem Ipsum, giving information
                        on its origins
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 pr-5">
                    <div className="text-sm">
                      <p>Jan 2006 - jan 2007 (17 Years, 11 Months)</p>
                      <p>
                        Website :
                        <span className="text-blue-600">
                          <a href="www.abcgroup.com">www.abcgroup.com</a>
                        </span>
                      </p>
                    </div>
                    <div>
                      <button className="flex gap-1 border text-blue-600 border-blue-600 rounded-full px-2">
                        Edit
                        <span>
                          <div className="w-3 pt-2">
                            <img src="/images/edit.png" alt="" />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mr-8 ml-16 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="w-12 px-2">
                      <img src="/images/ellipse.png" alt="" />
                    </div>
                    <div>
                      <h3 className=" font-medium">Graphic Designer</h3>
                      <p>RS Group of companies, Sadasd, Kuwait.</p>
                      <p className="text-sm">( Retail, Fashion )</p>
                      <p className="pt-2">Job Description</p>
                      <p className="text-sm">
                        Reference site about Lorem Ipsum, giving information
                        on its origins
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 pr-5">
                    <div className="text-sm">
                      <p>Jan 2006 - jan 2007 (17 Years, 11 Months)</p>
                      <p>
                        Website :
                        <span className="text-blue-600">
                          <a href="www.abcgroup.com">www.abcgroup.com</a>
                        </span>
                      </p>
                    </div>
                    <div>
                      <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                        Edit
                        <span>
                          <div className="w-3 pt-2">
                            <img src="/images/edit.png" alt="" />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="w-12 px-2">
                  <img src="/images/skills.png" alt="" />
                </div>
                <div>
                  <h3 className="font-bold">IT Skills / Certifications</h3>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="mt-4 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                    
                      <div className="flex gap-1 justify-between">
                        <div className="ml-4">
                          <p>Java J2EE</p>
                          <p>2023</p>
                          <p className="text-sm">2 Years 2 Months</p>
                        </div>
                        <div className=" text-blue-600 pr-5">
                          <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                            Edit
                            <span>
                              <div className="w-3 pt-2">
                                <img src="/images/edit.png" alt="" />
                              </div>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                      <div className="flex gap-1 justify-between">
                        <div className="ml-4">
                          <p>Java J2EE</p>
                          <p>2023</p>
                          <p className="text-sm">2 Years 2 Months</p>
                        </div>
                        <div className=" text-blue-600 pr-5">
                          <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                            Edit
                            <span>
                              <div className="w-3 pt-2">
                                <img src="/images/edit.png" alt="" />
                              </div>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-blue-600 pr-5">
                <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                  Add
                  <span>
                    <div className="text-2xl font-bold ">
                      <p>+</p>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div>
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="w-12 px-2">
                    <img src="/images/employment.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold pb-4">Education Details</h3>
                  </div>
                </div>
                <div className=" text-blue-600 pr-5">
                  <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                    Edit
                    <span>
                      <div className="w-3 pt-2">
                        <img src="/images/edit.png" alt="" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-4 mr-8 ml-16 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="w-12 px-2">
                      <img src="/images/ellipse.png" alt="" />
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
                    <div>
                      <button className="flex gap-1 border text-blue-600 border-blue-600 rounded-full px-2">
                        Edit
                        <span>
                          <div className="w-3 pt-2">
                            <img src="/images/edit.png" alt="" />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mr-8 ml-16 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="w-12 px-2">
                      <img src="/images/ellipse.png" alt="" />
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
                    <div>
                      <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                        Edit
                        <span>
                          <div className="w-3 pt-2">
                            <img src="/images/edit.png" alt="" />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="w-12 px-2">
                    <img src="/images/employment.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold pb-4">Personal Details</h3>
                  </div>
                </div>
                <div className=" text-blue-600 pr-5">
                  <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                    Edit
                    <span>
                      <div className="w-3 pt-2">
                        <img src="/images/edit.png" alt="" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-4 mr-5 ml-16 pt-4 rounded-md">
                <div className="grid grid-cols-4 gap-8">
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
                    <p className="text-sm">
                      Visa Status for Current Location
                    </p>
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
                    <p>=324 - 123456789908</p>
                  </div>
                  <div>
                    <p className="text-sm">LinkedIn URL</p>
                    <a href="#" className="text-sm text-blue-600">
                      https://www.linkedin.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="w-12 px-2">
                    <img src="/images/employment.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold pb-4">Desired Job</h3>
                  </div>
                </div>
                <div className=" text-blue-600 pr-5">
                  <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                    Edit
                    <span>
                      <div className="w-3 pt-2">
                        <img src="/images/edit.png" alt="" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-4 mr-5 ml-16 pt-4 rounded-md">
                <div className="grid grid-cols-3 gap-8">
                  <div className="">
                    <p className="text-sm">Preferred Industry</p>
                    <div className="flex justify-between border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm">Preferred Industry</p>
                    <div className="flex justify-between border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm">Preferred Industry</p>
                    <div className="flex justify-between border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm">Preferred Industry</p>
                    <div className="flex justify-between border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm">Visa Expiry</p>
                    <p>January 2025</p>
                  </div>
                  <div className="">
                    <p className="text-sm">Preferred Industry</p>
                    <div className="flex justify-between border border-blue-600 rounded-full px-3">
                      <button className="">Photoshop</button>
                      <div className="pt-1">
                        <img src="/images/close.png" alt="" />
                      </div>
                    </div>
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
                    <p>=324 - 123456789908</p>
                  </div>
                  <div>
                    <p className="text-sm">LinkedIn URL</p>
                    <a href="#" className="text-sm text-blue-600">
                      https://www.linkedin.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div>
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="w-12 px-2">
                    <img src="/images/employment.png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold pb-4">Professional Summary</h3>
                  </div>
                </div>
                <div className=" text-blue-600 pr-5">
                  <button className="flex gap-1 border border-blue-600 rounded-full px-2">
                    Edit
                    <span>
                      <div className="w-3 pt-2">
                        <img src="/images/edit.png" alt="" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-4 mr-8 ml-16 pt-4 bg-[#E9EFFE] mb-4 pb-6 rounded-md">
                <div className="">
                  <h3 className="px-8">Your Uploaded CV</h3>
                  <div className="ml-8 mr-10 pt-4">
                    <img src="/images/cv.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-5 mr-4 mt-4">
                <button className="text-white bg-[#1E3964] rounded-full px-4 py-1">
                  Upload CV
                </button>
                <button className=" text-[#1E3964] border border-[#1E3964] rounded-full px-4 bg-white py-1">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1 ml-6">
          <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
            <div className=" pt-2 pb-2 ml-4 mr-4">
              <div className="bg-white pt-2 pb-6 pr-3 rounded-md ">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-1">
                    <span className="text-md font-medium dark:text-white">
                      {progress}%
                    </span>
                    <span className="text-base font-medium dark:text-white">
                      Profile Completed
                    </span>
                  </div>
                  <div className="text-blue-600">Updated Today</div>
                </div>
                <div className=" bg-gray-200 rounded-full h-[20px] dark:bg-[#D9D9D991] px-1 pt-1">
                  <div
                    className="bg-green-600 h-3 rounded-full pb-1"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <h3 className=" font-bold pb-2">You've done a great job!</h3>
              <p className="pb-5 text-sm text-gray-400">
                Completing all the required fields will help you to attract
                <br></br>more employers and job opportunities.
              </p>
              <p className="text-sm text-gray-400">
                Go an extra mile to grab the best for you!
              </p>
              <div class="h-4 border-b-2 border-[#0000004D] mr-2 mb-4"></div>
              <h5 className="text-sm text-gray-400">
                Follow the following tips for better result in Job Search!
              </h5>
              <div className="flex gap-2 items-center text-gray-400 justify-items-start text-sm pt-2 pb-2">
                <div>
                  <img src={Tick} alt="" className="size-5" />
                </div>
                <div>
                  <h3>
                    Keep on updating your profile for better job search
                    <br></br>
                    experience and results
                  </h3>
                </div>
              </div>
              <div className="text-gray-400 flex gap-2 items-center justify-items-start text-sm pt-2 pb-2">
                <div>
                  <img src={Tick} alt="" className="size-5" />
                </div>
                <div>
                  <h3>
                    Search for jobs matching for you and recommend the
                    <br></br>
                    jobs for others.
                  </h3>
                </div>
              </div>
              <div className="flex gap-2 text-gray-400 items-center justify-items-start text-sm pt-2 pb-2">
                <div>
                  <img src={Tick} alt="" className="size-5" />
                </div>
                <div>
                  <h3>
                    Download our Mobile Application for easy job search
                    <br></br>process
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </header>
  );
}
