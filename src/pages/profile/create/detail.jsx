import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";
import PersonalDetail from "../../../components/accounts/PersonalDetail";
import UploadImage from "../../../components/accounts/UploadImage";
import VisaStatus from "../../../components/accounts/VisaStatus";
import { useImageUploader } from "../../../hooks";
import { COUNTRIES, newRequest, SAVE_MEMBER } from "../../../api";
import { useUserStore } from "../../../lib/user";
import { useNavigate } from "react-router";

export default function ProfileDetail() {
  const { email } = useUserStore((state) => state.user);
  console.log(email);
  const { image, base64Image, imageFile, handleImage, removeImage } =
    useImageUploader();
  // const [base64String, setBase64String] = useState("");

  const [visaStatus, setVisaStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isLicense, setIsLicense] = useState("");
  const [loader, setLoader] = useState(false);
  const [gender, setGender] = useState("");
  console.log(imageFile);

  const navigate = useNavigate();

  console.log(base64Image);

  const { data: countriesListing } = useQuery({
    queryKey: ["countriesListing"],
    queryFn: () => newRequest.get(COUNTRIES).then((res) => res.data),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoader(true);
    handleProfileCreate(data);
  };

  console.log(errors);
  const handleProfileCreate = async (data) => {
    const languageIds = data?.languages?.map((item) => item.id);
    console.log(data);
    const formData = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: email,
      // role_type: data?.,
      // status: data?.,
      languages: languageIds,

      gender: gender,
      country: data?.country?.value,
      state: data?.state?.value,
      city: data?.city?.value,
      nationality: data?.nationality?.value,
      mobile_number: data?.mobileNumber,
      date_of_birth: data?.dateOfBirth,
      religion: data?.religion?.value,
      license_issued_from: data?.licenseIssued?.value,
      linkedin_url: data?.linkedin_url,

      visa_status: visaStatus,
      marital_status: maritalStatus,
      driving_license: isLicense,
      profile_photo: imageFile,
    };

    try {
      const res = await newRequest.post(SAVE_MEMBER, formData);
      if (res.success) {
        setLoader(false);
        toast.success("Profile Created  sucessfully");
        navigate("/profile");
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 py-8 max-w-5xl mx-auto flex flex-col gap-y-4"
    >
      <ProfileProgress status={50} />
      <UploadImage
        handleImage={handleImage}
        image={image}
        imageFile={imageFile}
      />
      <PersonalDetail
        gender={gender}
        setGender={setGender}
        register={register}
        control={control}
        countriesListing={countriesListing}
      />
      <VisaStatus
        setVisaStatus={setVisaStatus}
        visaStatus={visaStatus}
        register={register}
        control={control}
        maritalStatus={maritalStatus}
        setMaritalStatus={setMaritalStatus}
        isLicense={isLicense}
        setIsLicense={setIsLicense}
        countriesListing={countriesListing}
        loader={loader}
      />
      {/* <EducationDetail /> */}
    </form>
  );
}
