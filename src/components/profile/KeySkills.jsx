import { Pen, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { newRequest, PROFILE_UPDATE } from "../../api";
import { useQueryClient } from "@tanstack/react-query";

export default function KeySkills({ profile }) {
  const [isEdit, setIsEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();

  const skillsArray = profile?.skills?.split(",");
  console.log(skillsArray);

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
    if (profile?.skills) {
      setValue("skills", profile?.skills);
    }
  }, [skillsArray]);

  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    const formData = {
      skills: data?.skills,
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
        <div id="2" className="bg-white rounded px-4  flex justify-between py-2.5">
          <div className="flex gap-4 py-2">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
              <img src="/icons/bulb_on.svg" alt="" className="size-5" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3>Key Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skillsArray?.map((item, i) => (
                  <div
                    key={i}
                    className="border  rounded-full border-[#275DF5] text-[#275DF5] flex justify-between items-center h-8 w-fit px-3"
                  >
                    <span>{item}</span>
                    <X className="size-5 cursor-pointer ml-3" />
                  </div>
                ))}
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
      ) : (
        <div className="w-full bg-white  rounded px-5 py-4">
          <div className="flex gap-4">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              note
            </div>
            <div>
              <h3>Key Skills</h3>
              <p>
                Mention your Professional Skills which help you to offer best
                performance.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-16 my-3 flex flex-col gap-y-3 max-w-3xl"
          >
            <input
              {...register("skills")}
              className="bg-[#E9EFFE] w-full h-10 border-2 rounded border-[#407FFF] px-2 py-1.5"
              placeholder="Enter your Professional skills like Business Management, Communication, Negotiation etc."
            />
            <div className="flex gap-2 items-center">
              <button className="flex justify-center items-center text-white bg-[#1E3964] rounded-full w-20 h-8">
                Save
              </button>
              <div className="flex justify-center items-center text-[#1E3964] font-medium border-2 border-[#1E3964] rounded-full w-20 h-8">
                Cancel
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
