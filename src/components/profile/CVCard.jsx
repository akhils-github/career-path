import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CVCard() {
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
    <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="w-12 px-2">
              <img src="/images/employment.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold pb-4">Original CV</h3>
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
  );
}
