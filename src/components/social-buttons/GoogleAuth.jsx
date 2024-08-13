import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { GOOGLE_LOGIN, newRequest } from "../../api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
// import { jwtDecode } from "jwt-decode";

export default function GoogleLoginPage() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState(null);

  //   const responseGoogle = (response) => {
  //     // const decoded = jwtDecode(response?.credential);
  //     console.log(response?.response);
  //     alert("Login Success");
  //   };

  const onFailure = (error) => {
    console.error(error);
  };

  // Function to exchange authorization code for access token
  const responseGoogle = async (response) => {
    console.log(response);
    const formData = {
      access_token: response?.credential,
    };
    console.log(formData);
    try {
      const response = await newRequest.post(GOOGLE_LOGIN, formData);
      if (response.status == 200) {
        toast.success("sucessfully");
        navigate("/profile-create");
        localStorage.setItem("resData", JSON.stringify(response.credential));
      }
    } catch (error) {
      toast.error("User with the same email already exists");
      // Handle error
    }
  };

  // Call exchangeCodeForToken function when needed, for example after successful authentication

  return (
    <GoogleLogin
      onSuccess={responseGoogle}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      text={"signin"}
      className="google-login-button"
      shape="circle"
    />
  );
}
