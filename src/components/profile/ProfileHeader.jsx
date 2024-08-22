import { newFormRequest, UPDATE_USER } from "@/api";
import { useImageUploader } from "@/hooks";
import { useUserStore } from "@/lib/user";
import { useQueryClient } from "@tanstack/react-query";
import { Camera, Check } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import Tick from "/images/profile/tick-circle.svg";
export default function ProfileHeader({ userData }) {
  const { user } = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const { image, imageFile, handleImage, removeImage } = useImageUploader();

  const handleCV = async (data) => {
    const formData = new FormData();
    imageFile && formData.append("profile_photo", imageFile);

    try {
      const res = await newFormRequest.put(UPDATE_USER, formData);
      console.log(res);
      if (res.status == 200) {
        queryClient.invalidateQueries(["profile"]);
        removeImage();
        toast.success("CV sucessfull");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <div className="-mt-12 overflow-y-min mx-auto rounded ">
        {/* search */}
        <div className="text-[#2c2c2c] rounded-md px-5 bg-white gap-4 flex pt-5 pb-5 h-44  shadow">
          <div className="-mt-12 relative p-3 bg-white w-40  rounded shadow-md">
            {imageFile ? (
              <img
                className=" cursor-pointer w-full h-full object-contain rounded"
                src={image}
              />
            ) : (
              <img
                className=" cursor-pointer w-full h-full object-contain rounded"
                src={
                  user?.profile_photo
                    ? user.profile_photo
                    : "/images/account/no-profile.jpg"
                }
              />
            )}
            {imageFile ? (
              <div onClick={handleCV} className="bg-success cursor-pointer rounded-full text-white size-10 flex items-center justify-center absolute right-0 -bottom-0">
                <Check  />
              </div>
            ) : (
              <label
                htmlFor="upload"
                className="bg-[#275DF5] cursor-pointer rounded-full text-white size-10 flex items-center justify-center absolute right-0 -bottom-0"
              >
                <Camera />
              </label>
            )}
            <input
              type="file"
              onChange={handleImage}
              hidden
              className="hidden"
              id="upload"
            />
          </div>
          <div className="bg-[#275DF51A] flex flex-col px-5 pt-2 rounded w-[85%]">
            <div>
              <h3 className="font-semibold text-lg ">
                {user?.first_name} &#09; {user?.middle_name} &#09;
                {user?.last_name}
              </h3>
              <p> {userData?.profile?.profile_heading} &#09;at </p>
            </div>
            <div className="flex  gap-6 items-center mt-6">
              <div className="flex gap-1 items-center">
                <div className="size-8 rounded-full bg-[#FF572266]"></div>
                <p>
                  {user?.country?.name} , {user?.state?.name}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="size-8 rounded-full bg-[#1F69FF66]"></div>
                <p>{user?.email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="size-8 rounded-full bg-[#30984066]"></div>
                <p>{user?.mobile_number}</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#FCAF3233]"></div> */}
        </div>
      </div>
    </div>
  );
}
