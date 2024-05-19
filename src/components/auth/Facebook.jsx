import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookLoginPage() {
  const [user, setUser] = useState(null);
  const responseFacebook = (response) => {
    setUser(response);
  };

  console.log(user);
  return (
    <div>
      <FacebookLogin
        appId={"950178110149911"}
        autoLoad={true}
        fields="name, email, picture"
        scope="public_profile,email"
        callback={responseFacebook}
        cssClass="flex gap-1 items-center outline outline-1 outline-[#275DF5] rounded-full px-2 py-1  w-32 h-10"
        textButton="Facebook"
        icon={<img className="size-7" src="images/fb1.png" alt="" />}
      />
    </div>
  );
}
