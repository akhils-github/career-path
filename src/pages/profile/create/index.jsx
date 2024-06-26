import React from "react";
import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";

export default function ProfileCreate() {
  return (
    <div className="px-10 py-8 max-w-5xl mx-auto flex flex-col gap-y-6">
      <ProfileProgress  status={10}/>
      <EmploymentDetail/>
      <EducationDetail/>
    </div>
  );
}
