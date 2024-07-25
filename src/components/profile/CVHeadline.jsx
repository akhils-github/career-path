import { Pen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { newRequest, PROFILE_UPDATE } from "../../api";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function CVHeadline({ profile }) {
  const [isEdit, setIsEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();
  let { profile_heading } = profile ?? {};

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (profile_heading) {
      setValue("headline", profile_heading);
    }
  }, [profile_heading]);
  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    const formData = {
      profile_heading: data?.headline,
    };
    try {
      const res = await newRequest.put(
        `${PROFILE_UPDATE}${profile?.id}/`,
        formData
      );
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
    <>
      {!isEdit ? (
        <div className="bg-white rounded px-4 h-24 flex justify-between py-2.5">
          <div className="flex gap-4 py-2">
            <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
              <img src="/icons/note.svg" alt="" className="size-5" />
            </div>
            <div>
              <h3>CV Headline</h3>
              <p>
                {profile_heading}
                {/* Graphic Designer in Construction / Civil Engineering in Sadasd */}
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-16 my-3 flex flex-col gap-y-3"
          >
            <textarea
              {...register("headline")}
              className="bg-[#E9EFFE] w-full h-20 px-2 py-1.5"
            />
            <div className="flex gap-2 items-center">
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
        </div>
      )}
    </>
  );
}
