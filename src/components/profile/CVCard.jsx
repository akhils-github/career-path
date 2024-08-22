import { newFormRequest, newRequest, UPDATE_USER } from "@/api";
import { useImageUploader } from "@/hooks";
import { useUserStore } from "@/lib/user";
import { useQueryClient } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Document, Page, pdfjs } from "react-pdf";

export default function CVCard() {
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useUserStore((state) => state);
  console.log(user);
  const queryClient = useQueryClient();
  const { image, imageFile, handleImage, removeImage } = useImageUploader();
console.log(imageFile)
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoader(true);
    handleCV(data);
  };
  const handleCV = async (data) => {
    const formData = new FormData();
    imageFile && formData.append("cv_file", imageFile);

    try {
      const res = await newFormRequest.put(UPDATE_USER, formData);
      console.log(res);
      if (res.status == 200) {
        queryClient.invalidateQueries(["profile"]);
        removeImage()
        setLoader(false);
        toast.success("CV sucessfull");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-white mb-10 px-4 py-4 rounded-md">
      <div className="flex justify-between  w-full">
        <div className="flex gap-4 w-full ">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/brain.svg" alt="" className="size-5" />
          </div>
          <div className=" w-full">
            <h3 className="font-bold w-full col-span-3">
              IT Skills / Certifications
            </h3>
            <div className="my-4 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-[#E9EFFE] py-3  px-4 rounded-md"
              >
                <h2>Your Uploaded CV</h2>
                <div className="bg-white my-2 h-32 w-full">
                  {image ? (
                    <iframe src={image} alt="" className="w-full h-full" />
                  ) : (
                    <iframe
                      src={user?.cv_file}
                      alt=""
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="flex justify-end gap-5 mr-4 mt-4">
                  {imageFile ? (
                    <button className="text-white bg-[#1E3964] rounded-full px-4 py-1">
                      Upload CV
                    </button>
                  ) : (
                    <a
                      href={user?.cv_file}
                      target="_blank"
                      className=" text-[#1E3964] border border-[#1E3964] rounded-full px-4 bg-white py-1"
                    >
                      Download CV
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        {!isEdit && (
          <label
            htmlFor="cv"
            // onClick={() => setIsEdit(!isEdit)}
            className="border-2 cursor-pointer rounded-full w-fit px-2.5  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
          >
            <span>Edit</span>
            <Pen className="size-4 fill-[#275DF5]" />
            <input
              onChange={handleImage}
              type="file"
              name="cv"
              className="hidden"
              id="cv"
            />
          </label>
        )}
      </div>
    </div>
    // <div className=" bg-white my-4 px-4 py-5 rounded-md">
    //   <div>
    //     <div className="flex justify-between">
    //       <div className="flex gap-6">
    //         <div className="w-12 px-2">
    //           <img src="/images/employment.png" alt="" />
    //         </div>
    //         <div>
    //           <h3 className="font-bold pb-4">Original CV</h3>
    //         </div>
    //       </div>
    //       <div
    //         onClick={() => setIsEdit(!isEdit)}
    //         className="border-2 cursor-pointer rounded-full w-fit px-2.5  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
    //       >
    //         <span>Edit</span>
    //         <Pen className="size-4 fill-[#275DF5]" />
    //       </div>
    //     </div>
    //     <div>
    //       {console.log(user?.cv_file)}
    //       {/* <iframe src={user?.cv_file} width="100%" height="200px" /> */}
    //     </div>
    //     <div className=" bg-[#E9EFFE]  rounded-md">
    //       <div className="">
    //         <h3 className="px-8">Your Uploaded CV</h3>
    //         <div className="ml-8 mr-10 pt-4">
    //           <img src="/images/cv.png" alt="" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex justify-end gap-5 mr-4 mt-4">
    //       <button className="text-white bg-[#1E3964] rounded-full px-4 py-1">
    //         Upload CV
    //       </button>
    //       <button className=" text-[#1E3964] border border-[#1E3964] rounded-full px-4 bg-white py-1">
    //         Download CV
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
