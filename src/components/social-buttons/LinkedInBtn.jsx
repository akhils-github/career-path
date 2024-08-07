import { useCallback } from "react";
import { LoginSocialLinkedin } from "reactjs-social-login";
import { LINKEDIN_LOGIN, newRequest } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function LinkedInBtn() {
  const REDIRECT_URI = "http://localhost:3000/succes";
  const navigate = useNavigate();
  const handleLinkedin = async (response) => {
    console.log("res", response);
    const formData = {
      access_token: response?.data?.access_token,
    };
    try {
      const res = await newRequest.post(LINKEDIN_LOGIN, formData);
      console.log(res);

      if (res.status == 200) {
        toast.success("sucessfully");
        navigate("/profile-create");
        localStorage.setItem("resData", JSON.stringify(res.data));
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };
  return (
    <LoginSocialLinkedin
      client_id={"869kd8awoot2ow"}
      client_secret={"Jwk37LMiXENDe4vd"}
      scope="openid profile w_member_social email"
      redirect_uri={REDIRECT_URI}
      // onLoginStart={onLoginStart}
      onResolve={(data) => {
        handleLinkedin(data);
        console.log(data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <div className="flex cursor-pointer gap-1.5 items-center px-3 border rounded-full w-fit h-10">
        <img src="/icons/linkedin.svg" alt="linkedin" className="w-7" />
        <p>Linkedin</p>
           
      </div>
    </LoginSocialLinkedin>
  );
}
