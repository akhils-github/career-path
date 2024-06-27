import React from "react";
import ProfileProgress from "../../../components/accounts/ProfileProgress";
import EmploymentDetail from "../../../components/accounts/EmploymentDetail";
import EducationDetail from "../../../components/accounts/Education";
import PersonalDetail from "../../../components/accounts/PersonalDetail";
import UploadImage from "../../../components/accounts/UploadImage";
import VisaStatus from "../../../components/accounts/VisaStatus";

export default function ProfileDetail() {
  return (
      <div className="px-10 py-8 max-w-5xl mx-auto flex flex-col gap-y-4">
        <ProfileProgress status={50}/>
        <UploadImage/>
        <PersonalDetail />
        <VisaStatus/>
        {/* <EducationDetail /> */}
      </div>
  );
}
