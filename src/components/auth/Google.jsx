import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function GoogleLoginPage() {
  const [accessToken, setAccessToken] = useState(null);

  const responseGoogle = (response) => {
    const decoded = jwtDecode(response?.credential);
    console.log(response?.credential);
    alert("Login Success");
  };

  const onFailure = (error) => {
    console.error(error);
  };

  // Function to exchange authorization code for access token
  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post("/api/exchange-code", { code });
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error(
        "Error exchanging authorization code for access token:",
        error.response.data
      );
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
      className="google-login-button  outline outline-1 outline-[#275DF5]"
      shape="circle"
      theme="outline blue"
    />
  );
}
