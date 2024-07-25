import { Pen } from "lucide-react";
import React, { useState } from "react";

export default function Summary({ userData }) {
  console.log(userData);
  const [isEdit, setIsEdit] = useState(false);
  // const {employer_country} = userData?.profile?.employer_details

  return (
    <div className="px-3 py-6 bg-white mb-4 pb-6 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-6 w-full">
          <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
            Icon
          </div>
          <div className="w-full ">
            <div className="mb-5">
              <h3 className="font-bold ">Professional Summary</h3>
            </div>
            {!isEdit ? (
              <div className="flex flex-col gap-y-5">
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
            ) : (
              <form
                // onSubmit={handleSubmit(onSubmit)}
                className="my-3 flex flex-col gap-y-3 b  w-full"
              >
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Career Snapshot
                  </label>
                  <textarea
                    // {...register("headline")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-20 rounded-md px-2"
                  />
                </div>
                <div className="flex gap-x-4 items-center px-3 space-y-1 whitespace-nowrap">
                  <div className="flex group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Total Work Experience
                    </label>
                    <div className="flex gap-1 items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Years</p>
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Months</p>
                    </div>
                  </div>
                  <div className="flex group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Total Gulf Experience
                    </label>
                    <div className="flex gap-1 items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Years</p>
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Months</p>
                    </div>
                  </div>

                  <div className="flex group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Current / Latest Monthly salary
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-32 h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Major Achievements / Projects
                  </label>
                  <textarea
                    // {...register("headline")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-16 rounded-md px-2"
                  />
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Honors & Awards
                  </label>
                  <textarea
                    // {...register("headline")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-16 rounded-md px-2"
                  />
                </div>

                <div className="flex gap-2 items-center px-3 mt-3">
                  <button className="flex justify-center items-center text-white bg-[#1E3964] rounded-full w-20 h-8">
                    Save
                  </button>
                  <div
                    onClick={() => setIsEdit(!isEdit)}
                    className="flex justify-center items-center cursor-pointer text-[#1E3964] font-medium border-2 border-[#1E3964] rounded-full w-20 h-8"
                  >
                    Cancel
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        {!isEdit && (
          <div
            onClick={() => setIsEdit(!isEdit)}
            className="border-2 cursor-pointer rounded-full w-fit px-2.5  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
          >
            <span>Edit</span>
            <Pen className="size-4 fill-[#275DF5]" />
          </div>
        )}
      </div>
    </div>
  );
}
