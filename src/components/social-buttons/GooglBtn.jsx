import { useCallback } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";

export default function GooglBtn() {
  const REDIRECT_URI = "http://localhost:3000/account/login";
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);


  return (
    <LoginSocialGoogle
      client_id={import.meta.env.REACT_APP_GG_APP_ID || ""}
      onLoginStart={onLoginStart}
      redirect_uri={REDIRECT_URI}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({ provider, data }) => {
        console.log(provider, data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <div className="flex cursor-pointer gap-1.5 items-center px-3 border rounded-full w-fit h-10">
        <img src="/icons/Google.svg" alt="Google" className="w-7" />
        <p>Google</p>
           
      </div>
    </LoginSocialGoogle>
  );
}
