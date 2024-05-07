import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";

const LinkedInLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log(response);
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <LinkedIn
      clientId={"869kd8awoot2ow"}
      clientSecret="Jwk37LMiXENDe4vd"
      scope="openid profile w_member_social email"
      onSuccess={(code) => {
        navigate("/home");
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
      redirectUri="http://localhost:3000/succes"
    >
      {({ linkedInLogin }) => (
        <span
          onClick={linkedInLogin}
          // src={linkedin}
        className="border rounded-full px-4 py-1.5"
        >LinkedIn</span>
      )}
    </LinkedIn>

    // <LinkedIn
    //   clientId="867z24gfdootvl"
    //   onFailure={handleFailure}
    //   onSuccess={handleSuccess}
    //   redirectUri="http://localhost:3004" // Specify your redirect URI here
    //   render={({ onClick, disabled }) => (
    //     <button onClick={onClick} disabled={disabled}>
    //       Login with LinkedIn
    //     </button>
    //   )}
    // />
  );
};

export default LinkedInLoginButton;
