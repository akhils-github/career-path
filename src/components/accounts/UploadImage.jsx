import React from "react";

export default function UploadImage({ handleImage, image, imageFile }) {
  return (
    <label
      htmlFor="upload"
      className=" bg-white my-2 px-10 py-5 flex items-center  gap-6 rounded"
    >
      <div>
        {image ? (
          <img src={image} alt="" className="size-24 rounded-full " />
        ) : (
          <img src="/images/account/profile.png" alt="" className="size-24" />
        )}
      </div>
      {imageFile ? (
        <div >
          <p className="text-[#275DF5] font-medium text-lg">
            {imageFile?.name}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-[#275DF5] font-medium text-lg">
            Upload your Profile Photo
          </p>
          <p className="text-sm text-[#00000080]">
            Supported file format png, jpg, jpeg, gif ( Upto 3 MB )
          </p>
        </div>
      )}
      <input
        type="file"
        hidden
        className="hidden"
        id="upload"
        onChange={handleImage}
      />
    </label>
  );
}
