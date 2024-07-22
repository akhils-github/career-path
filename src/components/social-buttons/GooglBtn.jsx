import { useCallback } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";

export default function GooglBtn() {
  const REDIRECT_URI = "http://localhost:3000/account/login";
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  return (
    <LoginSocialGoogle
      // client_id={
      //   "301975931981-7k9gfrgjvmvslv0rjr5ut4vquiqknbe8.apps.googleusercontent.com"
      // }
      client_id="985135946166-v9sume15fv13h8ccouhfnche7gbg0ncr.apps.googleusercontent.com"
      onLoginStart={onLoginStart}
      cookie_policy={"single_host_origin"}
      // redirect_uri={REDIRECT_URI}
      // scope="openid profile email"
      // discoveryDocs="claims_supported"
      // access_type="offline"

      onResolve={(data) => {
        console.log( data);
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
