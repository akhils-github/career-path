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
  const navigate = useNavigate();
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
    <div className="h-screen w-screen flex">
      <div className="flex-[0.3] relative flex items-center justify-center bg-[#1e3964]">
        <div className="relative w-[234px] h-[234px]">
          <img
            className="object-contain h-full w-full"
            src={"/logo/seekats_logo.svg"}
          />
        </div>

        {/* <Link
          to=""
          target="_blank"
          className="absolute bottom-4 w-fit flex flex-col gap-[4px] left-20"
        >
          <p className="text-[0.91rem] text-[#EDEDED]">
            Developed and maintained by
          </p>
          <div className="relative h-8">
            <img
              className="object-contain h-full w-full"
              src={"/logo/seekats_logo.svg"}
            />
          </div>
        </Link> */}
      </div>
      <div className="flex-[0.7] bg-[#F8F9FA] flex items-center w-full justify-center !bg-center !bg-cover bg-no-repeat">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-[26rem]">
          <p className="text-2xl lg:text-[27px] text-black font-medium">
            Login to your Account
          </p>
          <p className="text-black text-[0.87rem] mt-3">
            See what is going on with your business
          </p>
          <div className="flex text-sm flex-col gap-5 mt-8 lg:mt-11">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-neutral-800 text-[0.91rem]">
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                autoComplete="off"
                spellCheck="false"
                placeholder="mail@abc.com"
                className="!text-[#2f2c2c] placeholder:text-[#8b8b8b] shadow px-4 bg-transparent flex-grow h-11 rounded-md border border-zinc-800 w-full"
              />
              {errors.email && (
                <span className="text-xs font-medium text-red-500">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-neutral-800 text-[0.91rem]">
                Password
              </label>
              <div className="flex items-center pr-3 border border-zinc-800 w-full rounded-md h-11">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  spellCheck="false"
                  placeholder="*****************"
                  {...register("password", { required: true })}
                  className="!text-[#2f2c2c] placeholder:text-[#8b8b8b]  px-4 bg-transparent flex-grow h-full "
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
          </div>
          <button className="bg-[#1E3964] mt-9 rounded-md font-[500] flex items-center justify-center text-[0.84rem] text-white h-11 lg:h-12 w-full">
            {loader ? (
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                Signing you in
              </div>
            ) : (
              "Login"
            )}
          </button>
          <div className="mt-4 flex items-center justify-between">
            {/* <div className="mb-[0.125rem] flex items-center gap-2 text-[#A1A1A1]">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-[0.9rem] h-[0.9rem] bg-gray-100 rounded remember_me"
              />
              <label htmlFor="remember_me" className="text-[0.84rem]">
                Remember Me
              </label>
            </div> */}
            <div className="text-center">
              Don’t have an account?{" "}
              <Link to={"/sign-up"} className="text-[#5B8AD8] cursor-pointer">
                Sign up
              </Link>
            </div>
            {/* <Link
              to="/forgot-password"
              className="text-stone-300 text-[0.84rem]"
            >
              Forgot Password?
            </Link> */}
          </div>
        </form>
      </div>
    </div>
  );

}
