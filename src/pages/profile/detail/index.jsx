import React from "react";
import ProfileHeader from "../../../components/profile/ProfileHeader";
import NavItems from "../../../components/profile/NavItems";
import Employment from "../../../components/profile/Employment";
import ITSkills from "../../../components/profile/ITSkills";
import EducationDetails from "../../../components/profile/EducationDetails";
import PersonalDetails from "../../../components/profile/PersonalDetails";
import DesiredJob from "../../../components/profile/DesiredJob";
import CVCard from "../../../components/profile/CVCard";

export default function ProfileDetailView() {
  return (
    <div className="flex flex-col gap-4">
      <ProfileHeader />
      <NavItems />
      <div className="flex-[0.5] flex bg-white">
        <Employment />
        <ITSkills />
        <EducationDetails />
        <PersonalDetails />
        <DesiredJob />
        <CVCard />
      </div>
      <div className="w-full h-10 bg-black flex-[0.5]">

      </div>
    </div>
  );
}
