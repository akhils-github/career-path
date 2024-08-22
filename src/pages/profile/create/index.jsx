import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";
import { newFormRequest, newRequest, PROFILE_CREATE } from "../../../api";
import { useUserStore } from "../../../lib/user";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

export default function ProfileCreate() {
  const [loader, setLoader] = useState(false);
  const [workingStatus, setWorkingStatus] = useState("");
  const [educationStatus, setEducationStatus] = useState("");
  const queryClient = useQueryClient()

  console.log(educationStatus)
  const navigate = useNavigate();
  const { id } = useUserStore((state) => state.user);
  console.log(id);
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
    console.log(data);
    const formData = {
      employer_details: {
        designation: data?.designation,
        employer_name: data?.employerName,
        employer_country: data?.country?.id,
        employer_state: data?.state?.id,
        working_status: workingStatus,
        start_month: data?.startMonth?.value,
        start_year: data?.startYear?.value,
        end_month: data?.endMonth?.value,
        end_year: data?.endYear?.value,
        currency: data?.currency?.id,
        monthly_salary: data?.monthlySalary,
        member: id,
      },
      profile: {
        profile_heading: data?.profileHeading,
        industry: data?.industry?.value,
        sub_industry: data?.subIndustry?.value,
        function_area: data?.functionalArea?.value,
        skills: data?.skills,
        member: id,
      },
      education: [
        {
          highest_qualification: educationStatus,
          course: data?.course?.id,
          specialization: data?.specialization?.id,
          university: data?.university?.id,
          education_location: data?.instituteLocation?.id,
          passing_year: data?.passingYear?.value,
        },
      ],
    };

    try {
      const res = await newRequest.post(PROFILE_CREATE, formData);
      console.log(res)
      if (res?.data.success) {
        setLoader(false);
        toast.success("Profile Created  sucessfully");
        navigate("/profile-detail");
        queryClient.invalidateQueries(["profile"]);
      }
    } catch (error) {
      setLoader(false);
      if (error.data.error) {
        toast.error("already exists");
      }
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-16 py-8 mx-auto flex flex-col gap-y-6 overflow-y-auto overflow-y-min h-full"
    >
      <ProfileProgress status={10} />
      <EmploymentDetail
        register={register}
        control={control}
        errors={errors}
        setWorkingStatus={setWorkingStatus}
        workingStatus={workingStatus}
      />
      <EducationDetail
        loader={loader}
        educationStatus={educationStatus}
        setEducationStatus={setEducationStatus}
        register={register}
        control={control}
        errors={errors}
      />
    </form>
  );
}
