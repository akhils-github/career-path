import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FacebookBtn from "../../../components/social-buttons/FacebookBtn";
import GooglBtn from "../../../components/social-buttons/GooglBtn";
import LinkedInBtn from "../../../components/social-buttons/LinkedInBtn";
import { ArrowRight, MoveRight } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../utils/schema";
import { REGISTER_USER, basicXFormRequest } from "../../../api";
import toast from "react-hot-toast";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setLoader(true);
    registerUser(data);
  };

  const registerUser = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirm_password", data.confirmPassword);

    try {
      const res = await basicXFormRequest.post(REGISTER_USER, formData);
      console.log(res.data);

      if (res.data.status === 1) {
        setLoader(false);
        toast.success("User registered successfully");
        localStorage.setItem("resData", JSON.stringify(res.data));

        navigate("/profile-create");
      } else {
        setLoader(false);
        toast.error("Password or email address is invalid");
      }
    } catch (error) {
      if (error?.response?.data?.email) {
        toast.error(error?.response?.data?.email);
      } else if (error?.response?.data?.password) {
        toast.error(error?.response?.data?.password);
      } else {
        toast.error("");
      }
      setLoader(false);
      console.error(error);
    }
  };

  return (
    <div className="w-full  px-20 overflow-y-auto overflow-y-min">
      <Link
        to="/sign-in"
        className="flex justify-end w-full gap-1.5 text-sm py-2"
      >
        Already Registered?
        <span className="text-[#275DF5] cursor-pointer">Login</span> here
      </Link>
      <div className="bg-[#FFFFFF] rounded lg:px-24 md:px-6 py-3 shadow-md max-w-4xl">
        <h3 className="font-bold text-base px-3">
          Create account faster using
        </h3>
        <div className="flex gap-2 py-2.5 px-3 items-center">
          <GooglBtn /> <FacebookBtn /> <LinkedInBtn />
        </div>
        <div className="h-4  border-b relative border-[#0000004D] text-[#0000004D] text-xl mx-3 ">
          <span className="bg-white absolute left-44 px-3">Or</span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-3 mt-2.5"
        >
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              autoComplete="off"
              type="text"
              disable={false}
              placeholder="Enter your personal Email ID"
              {...register("email")}
              className="rounded-md border border-[#C7C7C7] w-full px-2 focus:border-[#2E2E2E] text-sm border-opacity-60 h-8 text-zinc-500"
            />
            {errors?.email && (
              <span className="text-xs font-medium text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Create Password <span className="text-red-500">*</span>
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Create a password for SeekATS account"
              {...register("password")}
              className="rounded-md border border-[#C7C7C7] w-full px-2 focus:border-[#2E2E2E] text-sm border-opacity-60 h-8 text-zinc-500"
            />
            {errors?.password && (
              <span className="text-xs font-medium text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Confirm password for SeekATS account"
              {...register("confirmPassword")}
              className="rounded-md border border-[#C7C7C7] w-full px-2 focus:border-[#2E2E2E] text-sm border-opacity-60 h-8 text-zinc-500"
            />
            {errors?.confirmPassword && (
              <span className="text-xs font-medium text-red-500">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
          <div className="flex px-3 group flex-col space-y-2 ">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              What is your experience level?
            </label>
            <div className="flex gap-3 text-sm font-medium">
              <span className="px-3 border rounded-full py-0.5">
                I have work experience
              </span>
              <span className="px-3 border rounded-full py-0.5">
                I am a fresher
              </span>
            </div>
          </div>

          <div className="flex px-3 group flex-col space-y-2 ">
            <label
              htmlFor="file"
              className="rounded border cursor-pointer border-dashed flex gap-2 justify-center items-center h-14 bg-[#4F7BF71A] border-[#275DF5]"
            >
              <input
                id="file"
                autoComplete="off"
                type="file"
                {...register("file")}
                className="hidden w-full"
              />
              <img src="/icons/upload.svg" alt="" className="w-8" />
              <span className="text-[#275DF5] font-semibold">Browse</span>
              file to upload
            </label>
            <span className="text-xs font-medium text-[#00000080]">
              Supported file formats: doc, docx, pdf, rtf | upto 2 MB
            </span>
            {errors.file && (
              <span className="text-xs font-medium text-red-500">
                {errors.file?.message}
              </span>
            )}
          </div>

          <div className="flex gap-2 px-3">
            <input type="checkbox" {...register("terms")} />
            <span className="text-xs font-medium text-[#00000080]">
              I agree to Terms and Conditions & Privacy Policy governing the use
              of accountz.com
            </span>
          </div>

          <button className="bg-[#1E3964] m h-8 w-48 rounded-full text-sm  flex  justify-center items-center text-white gap-2 ">
            {loader ? (
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                Accont Creating
              </div>
            ) : (
              <>
                <p>Create Your Account</p>
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
