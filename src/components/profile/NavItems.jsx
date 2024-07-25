import React, { useState } from "react";
import { profileNav } from "../../constants/NavData";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function NavItems() {
  const [activeItem, setActiveItem] = useState(1);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  return (
    <div className="bg-white shadow-md w-full py-2 h-16 items-center rounded grid grid-cols-6 md:grid-cols-10 justify-items-center px-3 ">
      {profileNav?.map((item) => (
        <div
          onClick={() => setActiveItem(item?.id)}
          key={item?.id}
          className={`${
            activeItem === item?.id
              ? "bg-[#A5C3FF] text-[#0046D5] cursor-text"
              : "text-black font-medium cursor-pointer"
          } flex items-center justify-center w-fit px-4 h-10 font-bold rounded whitespace-nowrap`}
        >
          {item?.name}
        </div>
      ))}
    </div>
  );
}
