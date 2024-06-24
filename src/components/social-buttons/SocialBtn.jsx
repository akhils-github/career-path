import React from "react";

export default function SocialBtn({ text, icon }) {
  return (
    <div className="flex cursor-pointer gap-1.5 items-center px-3 border rounded-full w-fit h-10">
      <img src={icon} alt={text} className="w-7" />
      <p>{text}</p>
         
    </div>
  );
}
