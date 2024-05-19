import {
    ArrowRight,
    Bell,
    ChevronDown,
    Power,
    KeySquare,
    ShoppingCart,
    Search,
  } from "lucide-react";
  import { Fragment } from "react";
  // import { useSelector } from "react-redux";
  import { Menu, Transition } from "@headlessui/react";
  import { Link, useNavigate } from "react-router-dom";
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  export default function CandidateHeader() {
    return (
      <header
        className="w-full  py-4 bg-left bg-cover bg-no-repeat h-52 z-10 text-[#1E3964] "
      >
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
        <div className="bg-[#1e3964] w-full h-full">
ss
        </div>
      </header>
    );
  }
  