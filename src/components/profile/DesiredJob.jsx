import { useQueryClient } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function DesiredJob() {
  const [isEdit, setIsEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    const formData = {
      skills: data?.skills,
    };
    try {
      const res =
        //  await newRequest.put(
        //   `${PROFILE_UPDATE}${profile?.id}/`,
        //   formData
        // );
        console.log(res);
      if (res.status == 200) {
        queryClient.invalidateQueries(["profileListing"]);
        setIsEdit(false);
        setLoader(false);
        toast.success("Headline sucessfull");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-white  rounded-md px-4 py-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/search_job.svg" alt="" className="size-5" />
          </div>
          <div>
            <h3 className="font-bold pb-4">Desired Job</h3>
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
      {!isEdit ? (
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
      ) : (
        <div className="ml-16 max-w-2xl flex flex-col gap-y-3">
          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Gender
            </label>

            <div className="flex gap-4">
              <div className="border border-[#3467F6]  h-8 rounded-full w-20 flex items-center justify-center">
                Male
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full w-20 px-2 flex items-center justify-center">
                Female
              </div>
            </div>
          </div>

          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Preferred Industry
            </label>

            <input
              className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
              type="text"
              placeholder="Tell us your industry"
            />
          </div>
          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Preferred Designation / Role
            </label>

            <input
              className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
              type="text"
              placeholder="Tell us your industry"
            />
          </div>

          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Preferred Job Location/s
            </label>
            <div className="grid grid-cols-3 gap-x-3">
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Work Level
            </label>

            <div className="flex gap-x-3 gap-y-2 flex-wrap">
              <div className="border border-[#3467F6]  h-8 rounded-full px-3 flex items-center justify-center">
                Student / Intern
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                Entry Level
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                Non Managerial Level
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                Managerial Level
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                Senior Management (AVP , VP , GM)
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                Top Management (CEO , CFO , Director)
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Alternate Contact Number
            </label>
            <div className="flex items-center gap-3">
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-44 h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-1">
            <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
              Work Level
            </label>
            <div className="flex gap-x-3 gap-y-2 flex-wrap">
              <div className="border border-[#3467F6]  h-8 rounded-full px-3 flex items-center justify-center">
                Immediately
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                15 days
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                1 month
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                2 months
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                3 months
              </div>
              <div className="border border-[#3467F6]  h-8 rounded-full  px-3 flex items-center justify-center">
                6 months
              </div>
            </div>
          </div>

          <div className="flex gap-4 px-3 my-6">
            <button className="h-10 w-24  bg-[#1E3964] rounded-full text-white flex items-center justify-center">
              Save
            </button>

            <div
              onClick={() => setIsEdit(false)}
              className="h-10 w-24 border cursor-pointer border-[#1E3964] rounded-full text-[#1E3964] flex items-center justify-center"
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
