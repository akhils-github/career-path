import React, { useState } from "react";
import { profileNav } from "../../constants/NavData";

export default function NavItems() {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className="bg-white shadow-md w-full py-2 h-16 items-center rounded grid grid-cols-10 justify-items-center px-3 ">
      {profileNav?.map((item) => (
        <div
          onClick={() => setActiveItem(item?.id)}
          key={item?.id}
          className={`${
            activeItem === item?.id
              ? "bg-[#A5C3FF] text-[#0046D5] cursor-text"
              : "text-black font-medium cursor-pointer"
          } flex items-center justify-center w-fit px-4 h-10 font-bold rounded`}
        >
          {item?.name}
        </div>
      ))}
    </div>
  );
}
