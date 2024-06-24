import { useCallback } from "react";
import { LoginSocialLinkedin } from "reactjs-social-login";

export default function LinkedInBtn() {
  const REDIRECT_URI = "http://localhost:3000/account/login";
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  return (
    <LoginSocialLinkedin
      client_id={import.meta.env.REACT_APP_LINKEDIN_APP_ID || ""}
      client_secret={import.meta.env.REACT_APP_LINKEDIN_APP_SECRET || ""}
      redirect_uri={REDIRECT_URI}
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }) => {
        setProvider(provider);
        setProfile(data);
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
