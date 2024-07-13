import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function CVHeadline() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <div className="bg-white rounded px-4 h-24 flex justify-between py-2.5">
          <div className="flex gap-4 py-2">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              note
            </div>
            <div>
              <h3>CV Headline</h3>
              <p>
                Graphic Designer in Construction / Civil Engineering in Sadasd
              </p>
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
      ) : (
        <div className="w-full bg-white  rounded px-5 py-4">
          <div className="flex gap-4">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              note
            </div>
            <div>
              <h3>CV Headline</h3>
              <p>
                Graphic Designer in Construction / Civil Engineering in Sadasd
              </p>
            </div>
          </div>
          <div className="pl-16 my-3 flex flex-col gap-y-3">
            <textarea  className="bg-[#E9EFFE] w-full h-20 px-2 py-1.5" />
            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center text-white bg-[#1E3964] rounded-full w-20 h-8">
                Save
              </div>
              <div className="flex justify-center items-center text-[#1E3964] font-medium border-2 border-[#1E3964] rounded-full w-20 h-8">
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
