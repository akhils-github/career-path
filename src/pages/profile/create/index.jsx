import React from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";
import { newFormRequest } from "../../../api";

export default function ProfileCreate() {
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
    const formData = {
      employer_details: {
        designation: "Software Engineer",
        employer_name: "WIPRO",
        employer_country: 1,
        employer_state: 1,
        working_status: "yes",
        start_month: "January",
        start_year: 2020,
        end_month: "December",
        end_year: 2022,
        currency: 1,
        monthly_salary: 5000,
        member: 1,
      },
      profile: {},
      // education:{
    };

    try {
      const res = await newFormRequest.post(CUSTOMER, formData);
      if (res.status == 200) {
        setLoader(false);
        toast.success("Profile Created  sucessfully");
        // navigate("/customer");
        // queryClient.invalidateQueries([""]);
      }
    } catch (error) {
      setLoader(false);
      if (error.response.status === 422) {
        toast.error("Customer already exists");
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
      <EmploymentDetail register={register} control={control} errors={errors} />
      <EducationDetail />
    </form>
  );
}
