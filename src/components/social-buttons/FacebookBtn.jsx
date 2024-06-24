import React, { useCallback, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import SocialBtn from "./SocialBtn";
export default function FacebookBtn() {
  const REDIRECT_URI = "http://localhost:3000/account/login";
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    alert("logout success");
  }, []);
  return (
    <LoginSocialFacebook
      appId={import.meta.env.REACT_APP_FB_APP_ID || ""}
      fieldsProfile={
        "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
      }
      onLoginStart={onLoginStart}
      onLogoutSuccess={onLogoutSuccess}
      redirect_uri={REDIRECT_URI}
      onResolve={({ provider, data }) => {
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
