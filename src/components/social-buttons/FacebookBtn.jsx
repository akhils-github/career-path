import React, { useCallback, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import SocialBtn from "./SocialBtn";
import { FACEBOOK_LOGIN, newRequest } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export default function FacebookBtn() {
  const navigate = useNavigate();
  const REDIRECT_URI = "http://localhost:3000/account/login";


    const responseFacebook = async (response) => {
      console.log("res", response);
      // setUser(response);
      // const formData = new FormData();
      // formData.append("access_token", response?.accessToken);
      const formData = {
        access_token: response?.accessToken,
      };

      try {
        const res = await newRequest.post(FACEBOOK_LOGIN, formData);
        console.log(res);

        if (res.status == 200) {
          // alert("Success");
          toast.success("sucessfully");
          navigate("/profile-create");
          localStorage.setItem("resData", JSON.stringify(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <LoginSocialFacebook
      appId={"448316204857936"}
      fieldsProfile={
        "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
      }
      // onLoginStart={onLoginStart}
      // onLogoutSuccess={onLogoutSuccess}
      redirect_uri={REDIRECT_URI}
      onResolve={({ provider, data }) => {
        responseFacebook(data);
        console.log(provider, data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <div className="flex cursor-pointer gap-1.5 items-center px-3 border rounded-full w-fit h-10">
        <img src="/icons/Facebook.svg" alt="Facebook" className="w-7" />
        <p>Facebook</p>
           
      </div>
    </LoginSocialFacebook>
  );
}
