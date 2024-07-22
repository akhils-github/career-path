import { useCallback } from "react";
import { LoginSocialLinkedin } from "reactjs-social-login";

export default function LinkedInBtn() {
  const REDIRECT_URI = "http://localhost:3000/succes";
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  return (
    <LoginSocialLinkedin
      client_id={"869kd8awoot2ow"}
      client_secret={"Jwk37LMiXENDe4vd"}
      scope="openid profile w_member_social email"
      redirect_uri={REDIRECT_URI}
      onLoginStart={onLoginStart}
      onResolve={( data ) => {
        // setProvider(provider);
        // setProfile(data);
        console.log(data)
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
