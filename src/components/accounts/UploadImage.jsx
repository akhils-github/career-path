import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { newFormRequest } from "../../api";

export default function UploadImage({ handleImage, image, imageFile }) {
  const onSubmit = async (data) => {
    await handleImage(data);
    console.log(data);

    imageFile && handleProfileCreate();
  };
  useEffect(() => {
    if (imageFile) {
      handleProfileCreate(imageFile);
      console.log(true);
    }
  }, [imageFile]);
  const handleProfileCreate = async (data) => {
    console.log(imageFile);
    const formData = FormData();
    formData.append("profile_photo", data);
    // const formData = {
    //   first_name: data?.firstName,
    //   last_name: data?.lastName,
    //   email: email,
    //   role_type: 4,
    //   status: 1,
    //   languages: languageIds,

    //   gender: gender,
    //   country: data?.country?.value,
    //   state: data?.state?.value,
    //   city: data?.city?.value,
    //   nationality: data?.nationality?.value,
    //   mobile_number: data?.mobileNumber,
    //   date_of_birth: data?.dateOfBirth,
    //   religion: data?.religion?.value,
    //   license_issued_from: data?.licenseIssued?.value,
    //   linkedin_url: data?.linkedin_url,

    //   visa_status: visaStatus,
    //   marital_status: maritalStatus,
    //   driving_license: isLicense,
    //   profile_photo: imageFile,
    // };

    try {
      const res = await newFormRequest.post(
        `users/profiles/${id}/upload_resume/`,
        formData
      );
      if (res?.data.success) {
        setLoader(false);
        toast.success("Profile Created  sucessfully");
        // navigate("/profile");
        // queryClient.invalidateQueries([""]);
      }
    } catch (error) {
      setLoader(false);
      if (error.response.status === 422) {
        toast.error("already exists");
      }
      console.error(error);
    }
  };
  return (
    <label
      htmlFor="upload"
      className=" bg-white my-2 px-10 py-5 flex items-center  gap-6 rounded"
    >
      <div>
        {image ? (
          <img
            src={image}
            alt=""
            className="size-24 rounded-full  object-cover"
          />
        ) : (
          <img src="/images/account/profile.png" alt="" className="size-24" />
        )}
      </div>
      {imageFile ? (
        <div>
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
        onChange={onSubmit}
      />
    </label>
  );
}
