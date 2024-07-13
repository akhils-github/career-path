import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function Employment() {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className=" bg-white px-4 py-5 rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              Icon
            </div>
            <div>
              <h3 className="font-bold">Employment History</h3>
            </div>
          </div>
          <div className=" text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        </div>

        <div className=" bg-[#E9EFFE] my-5  ml-16 rounded-md">
          <div className="flex justify-between px-3 py-3">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">Graphic Designer</h3>
                <p>RS Group of companies, Sadasd, Kuwait.</p>
                <p className="text-sm">( Retail, Fashion )</p>
                <p className="">Job Description</p>
                <p className="text-sm">
                  Reference site about Lorem Ipsum, giving information on its
                  origins
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-xs flex flex-col gap-y-1">
                <p className=" whitespace-nowrap">
                  Jan 2006 - jan 2007 (17 Years, 11 Months)
                </p>
                <p className=" text-end">
                  Website :
                  <span className="text-blue-600">
                    <a href="www.abcgroup.com">www.abcgroup.com</a>
                  </span>
                </p>
              </div>
              <div
                onClick={() => setIsEdit(!isEdit)}
                className="border-2 cursor-pointer rounded-full w-fit px-2  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
              >
                <span>Edit</span>
                <Pen className="size-3 fill-[#275DF5]" />
              </div>
            </div>
          </div>
        </div>
        
        <div className=" bg-[#E9EFFE]  ml-16 rounded-md">
          <div className="flex justify-between px-3 py-3">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">Graphic Designer</h3>
                <p>RS Group of companies, Sadasd, Kuwait.</p>
                <p className="text-sm">( Retail, Fashion )</p>
                <p className="">Job Description</p>
                <p className="text-sm">
                  Reference site about Lorem Ipsum, giving information on its
                  origins
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-xs flex flex-col gap-y-1">
                <p className=" whitespace-nowrap">
                  Jan 2006 - jan 2007 (17 Years, 11 Months)
                </p>
                <p className=" text-end">
                  Website :
                  <span className="text-blue-600">
                    <a href="www.abcgroup.com">www.abcgroup.com</a>
                  </span>
                </p>
              </div>
              <div
                onClick={() => setIsEdit(!isEdit)}
                className="border-2 cursor-pointer rounded-full w-fit px-2  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
              >
                <span>Edit</span>
                <Pen className="size-3 fill-[#275DF5]" />
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}
