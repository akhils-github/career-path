import React from "react";

export default function ProfileFooter() {
  return (
    <footer className="footer footer-center bg-[#1E3964] text-white p-6">
      <aside>
        <div className="w-48">
          <img
            src="/logo/seekats_logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <p className="font-normal border-b pb-4 px-4 border-[#FFFFFF80]">
          Seekats.com provides employers with human capital solutions that
          result in measurably improved employee and organizational performance
          while minimizing employment practice risk.
        </p>
        <p>
          Copyright © ${new Date().getFullYear()} All Rights Reserved. Developed
          by{" "}
          <span className="text-[#FEC003]">
             Enarin Business Solutions Pvt. Ltd., Kochi, India.
          </span>
        </p>
      </aside>
    </footer>
  );
}
