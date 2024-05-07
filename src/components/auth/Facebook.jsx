import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookLoginPage() {
  const [user, setUser] = useState(null);
  const responseFacebook = (response) => {
    setUser(response);
  };
  const handleLoginFailure = (error) => {
    console.log(error);
  };
  const handleLogout = () => {
    setUser(null);
  };

  console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <img src={user.picture.data.url} alt={user.name} />
        </div>
      ) : (
        <FacebookLogin
          appId={"950178110149911"}
          autoLoad={true}
          fields="name, email, picture"
          scope="public_profile,email"
          callback={responseFacebook}
          cssClass="flex gap-1 items-center outline outline-1 outline-[#275DF5] rounded-full px-3 py-1.5"
          textButton="Facebook"
          icon={
            <img className="size-5" src="images/fb1.png" alt="" />
          }
        />
      )}
    </div>
  );
}
