import React, { useState } from "react";
import Circle from "/icons/multi-circle.svg";
import Tick from "/icons/tick-circle.svg";
import Round from "/icons/round.svg";
import Dashes from "/images/dashes.png";

export default function ProfileProgress() {
  const [step, setStep] = useState("");

  return (
    <div className="flex flex-col gap-1.5 justify-center text-white">
      {/* First  */}
      <div className="flex gap-2 items-center -ml-1.5">
        <div>
          <img src={Circle} alt="" />
        </div>
        <div>
          <h3>Create your account!</h3>
          <p className="text-xs">
            Get explored by employers on acountz & apply to jobs in one click
          </p>
        </div>
      </div>
      <div className="px-3">
        <img src={Dashes} alt="" />
      </div>
      {/* 2nd  */}

      <div className="flex gap-2 items-center">
        <div>
          <img src={Round} alt="" className="size-6" />
        </div>
        <div>
          <h3>Let’s build your profile!</h3>
          {/* <p>
            Get explored by employers on acountz & apply to jobs in one click
          </p> */}
        </div>
      </div>

      <div className="px-3">
        <img src={Dashes} alt="" />
      </div>
      {/* 3rd  */}

      <div className="flex gap-2 items-center justify-items-start ">
        <div>
          <img src={Tick} alt="" className="size-6" />
        </div>
        <div>
          <h3>Personal Details</h3>
          {/* <p>
            Get explored by employers on acountz & apply to jobs in one click
          </p> */}
        </div>
      </div>
    </div>
  );

  // return (
  //   <section class="flex justify-center">
  //     <div class="w-80 font-[Inter]">
  //       <ul>
  //         <li class="relative flex items-start gap-6 pb-16">
  //           <div class="before:absolute before:left-[19px] before:border-dashed before:h-1/2  before:inset-y-12 before:w-[1px] before:border before:border-[#FFFFFFA8]">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="36"
  //               height="36"
  //               class="bi bi-circle-fill fill-gray-400"
  //               viewBox="0 0 16 16"
  //             >
  //               <circle cx="8" cy="8" r="8" />
  //             </svg>
  //           </div>
  //           <div>
  //             <p class="text-base leading-3 font-bold text-white">Create your account</p>
  //             <p class="mt-2 text-white text-xs  font-normal">
  //               Get explored by employers on acountz & apply to jobs in one
  //               click
  //             </p>
  //           </div>
  //         </li>

  //         <li class="relative flex items-start gap-6 pb-16">
  //           <div class="before:absolute before:left-[20.5px] before:border-dashed before:h-2/5 before:inset-y-8 before:w-[1px] before:border">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="24"
  //               height="24"
  //               class="bi bi-circle-fill fill-gray-400"
  //               viewBox="0 0 16 16"
  //             >
  //               <circle cx="8" cy="8" r="8" />
  //             </svg>
  //           </div>
  //           <div>
  //             <p class="text-base leading-3 font-bold text-white">Let’s build your profile!</p>
  //             {/* <p class="mt-2 text-white text-xs">Lorem ipsum dolor sit amet.</p> */}
  //           </div>
  //         </li>
  //         <li class="relative flex items-start gap-6 pb-5">
  //           <div className="px-2">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="24"
  //               height="24"
  //               class="bi bi-circle-fill fill-gray-400"
  //               viewBox="0 0 16 16"
  //             >
  //               <circle cx="8" cy="8" r="8" />
  //             </svg>
  //           </div>
  //           <div>
  //             <p class="text-base leading-3 font-bold text-white">Personal Details</p>
  //             <p class="mt-2 text-white text-xs">
  //               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est?
  //             </p>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </section>
  // );
}
