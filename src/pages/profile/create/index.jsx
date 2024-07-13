import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";
import { newFormRequest, newRequest, PROFILE_CREATE } from "../../../api";
import { useUserStore } from "../../../lib/user";
import { useNavigate } from "react-router";

export default function ProfileCreate() {
  const [loader, setLoader] = useState(false);
  const [workingStatus, setWorkingStatus] = useState("");
  const navigate = useNavigate();
  const { userId } = useUserStore((state) => state);
  console.log(userId);
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
        member: userId,
      },
      profile: {
        profile_heading: data?.profileHeading,
        industry: data?.industry?.value,
        sub_industry: data?.subIndustry?.value,
        function_area: data?.functionalArea?.value,
        skills: data?.skills,
        member: userId,
      },
      education: [
        {
          highest_qualification: "",
          course: 1,
          specialization: 1,
          university: 1,
          education_location: 1,
          passing_year: data?.passingYear?.value,
        },
      ],
    };

    try {
      const res = await newRequest.post(PROFILE_CREATE, formData);
      if (res.status == 200) {
        setLoader(false);
        toast.success("Profile Created  sucessfully");
        navigate("/profile-detail");
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
      className="px-16 py-8 mx-auto flex flex-col gap-y-6"
    >
      <ProfileProgress status={10} />
      <EmploymentDetail
        register={register}
        control={control}
        errors={errors}
        setWorkingStatus={setWorkingStatus}
        workingStatus={workingStatus}
      />
      <EducationDetail loader={loader} />
    </form>
  );
}
