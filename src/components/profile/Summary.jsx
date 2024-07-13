import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function Summary() {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="px-3 py-6 bg-white mb-4 pb-6 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
            Icon
          </div>
          <div className="flex flex-col gap-y-5">
            <h3 className="font-bold ">Professional Summary</h3>
            <div>
              <p className="text-sm text-[#000000B2]">Career Snapshot</p>
              <p className="">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum <br></br>generator.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="">
                <p className="text-sm text-[#000000B2]">
                  Total Work Experience
                </p>
                <p>2 Years 7 Months</p>
              </div>
              <div className="">
                <p className="text-sm text-[#000000B2]">
                  Total Gulf Experience
                </p>
                <p>2 Years 7 Months</p>
              </div>
              <div className="">
                <p className="text-sm text-[#000000B2]">
                  Current / Latest Monthly salary
                </p>
                <p>AED 20,000</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#000000B2]">
                Major Achievements / Projects
              </p>
              <p className="">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum <br></br>generator.
              </p>
            </div>
            <div>
              <p className="text-sm text-[#000000B2]">Honors and Awards</p>
              <p className="">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum <br></br>generator.
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="border-2 cursor-pointer rounded-full w-fit px-2.5  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
        >
          <span>Edit</span>
          <Pen className="size-4 fill-[#275DF5]" />
        </div>
      </div>
    </div>
  );
}
