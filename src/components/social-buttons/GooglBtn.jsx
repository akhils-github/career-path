import { useCallback } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GOOGLE_LOGIN, newRequest } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function GooglBtn() {
  const REDIRECT_URI = "http://localhost:3000/account/login";
  const navigate = useNavigate();

  const handleGoogle = async (response) => {
    console.log("res", response);
    const formData = {
      access_token: response?.data?.access_token,
    };
    try {
      const res = await newRequest.post(GOOGLE_LOGIN, formData);
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
        toast.error( error.message);
      }
    }
  };
  return (
    <LoginSocialGoogle
      client_id="985135946166-v9sume15fv13h8ccouhfnche7gbg0ncr.apps.googleusercontent.com"
      cookie_policy={"single_host_origin"}
      // redirect_uri={REDIRECT_URI}
      scope="openid profile email"
      // discoveryDocs="claims_supported"

      onResolve={(data) => {
        handleGoogle(data);
      }}
      onReject={(err) => {
        toast.error(err);
      }}
    >
      <div className="flex cursor-pointer gap-1.5 items-center px-3 border rounded-full w-fit h-10">
        <img src="/icons/Google.svg" alt="Google" className="w-7" />
        <p>Google</p>
           
      </div>
    </LoginSocialGoogle>
  );
}
