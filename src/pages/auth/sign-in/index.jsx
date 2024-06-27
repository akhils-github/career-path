import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema } from "../../../utils/schema";
import {
  LOGIN,
  basicRequest,
  basicXFormRequest,
  newRequest,
} from "../../../api";
import toast from "react-hot-toast";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setLoader(true);
    loginUser(data);
  };

  const loginUser = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await basicXFormRequest.post(LOGIN, formData);
      console.log(res.data);

      if (res.data.status === 1) {
        setLoader(false);
        toast.success("Login sucessfull");
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        navigate("/profile-create");
      } else {
        setLoader(false);
        toast.error("Password or email address is invalid");
      }
    } catch (error) {
      setLoader(false);
      toast.error(error?.response?.data?.message);
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#f4f6f9]">
      <div className="w-5/12">
        <img src="/logo/seekats-logo-blue.svg" alt="" />
        <div className="bg-white shadow px-8 py-5 rounded-md my-3">
          <div className="mb-10">
            <p className="text-2xl font-semibold">Login your Account</p>
            <p className="text-sm">
              Please select a strong, new password that you have not used
              before.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-4">
            <div className="flex flex-col gap-y-3 my-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                {...register("email", { required: true })}
                className="rounded h-10 w-full border border-[#D4D4D4] px-2"
              />
              {errors.email && (
                <span className="text-xs font-medium text-red-500">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-3 my-3">
              <label htmlFor="">Password</label>
              <div className="flex items-center justify-between rounded h-10 gap-2 px-2 border border-[#D4D4D4]">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className="px-2 w-full h-full"
                />
                {showPassword ? (
                  <Eye
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer text-[#B5B5B5] "
                  />
                ) : (
                  <EyeOff
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer text-[#B5B5B5]"
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-xs font-medium text-red-500">
                  {errors.password?.message}
                </span>
              )}
            </div>
            <button className="bg-[#1E3964] text-white rounded-full w-48 mx-auto my-6 h-10 flex justify-center items-center">
              Login
            </button>
          </form>

          <p className="text-center">
            Don’t have an account?{" "}
            <Link to={""} className="text-[#5B8AD8] cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
