import React from "react";

export default function PersonalDetails() {
  return (
    <div className="mt-4 pt-4 bg-white mb-4 pb-6 rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="w-12 px-2">
              <img src="/images/employment.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold pb-4">Personal Details</h3>
            </div>
          </div>
          <div className=" text-blue-600 pr-5">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Edit
              <span>
                <div className="w-3 pt-2">
                  <img src="/images/edit.png" alt="" />
                </div>
              </span>
            </button>
          </div>
        </div>
        <div className="mt-4 mr-5 ml-16 pt-4 rounded-md">
          {/* <div className="flex justify-between"> */}
          <div className="grid grid-cols-4 gap-8">
            <div className=" ">
              <p className="text-sm">Date of Birth</p>
              <p>August 17, 1997</p>
            </div>
            <div className="">
              <p className="text-sm">Gender</p>
              <p>Male</p>
            </div>
            <div className="">
              <p className="text-sm">Nationality</p>
              <p>Qatari</p>
            </div>
            <div className="">
              <p className="text-sm">Maritel Status</p>
              <p>Married</p>
            </div>
            <div className="">
              <p className="text-sm">Driving License</p>
              <p>Yes (Kuwait)</p>
            </div>
            <div className="">
              <p className="text-sm">Current Location</p>
              <p>Dubai, UAE</p>
            </div>
            <div className="">
              <p className="text-sm">Visa Status for Current Location</p>
              <p>Visit Visa</p>
            </div>
            <div className="">
              <p className="text-sm">Visa Expiry</p>
              <p>January 2025</p>
            </div>
            <div className="">
              <p className="text-sm">Language Known</p>
              <p>Arabic</p>
            </div>
            <div className="">
              <p className="text-sm">Religion</p>
              <p>Jainism</p>
            </div>
            <div className="">
              <p className="text-sm">Alternate Email Address</p>
              <p>erdfghgh@fdgjh.com</p>
            </div>
            <div className="">
              <p className="text-sm">Alternate Contact Number</p>
              <p>=324 - 123456789908</p>
            </div>
            <div>
              <p className="text-sm">LinkedIn URL</p>
              <a href="#" className="text-sm text-blue-600">
                https://www.linkedin.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
