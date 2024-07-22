import React from "react";
import { useQuery } from "@tanstack/react-query";

import ProfileHeader from "../../../components/profile/ProfileHeader";
import NavItems from "../../../components/profile/NavItems";
import Employment from "../../../components/profile/Employment";
import ITSkills from "../../../components/profile/ITSkills";
import EducationDetails from "../../../components/profile/EducationDetails";
import PersonalDetails from "../../../components/profile/PersonalDetails";
import DesiredJob from "../../../components/profile/DesiredJob";
import CVCard from "../../../components/profile/CVCard";
import CVHeadline from "../../../components/profile/CVHeadline";
import KeySkills from "../../../components/profile/KeySkills";
import Summary from "../../../components/profile/Summary";
import { Check } from "lucide-react";
import { GET_PROFILES, newRequest } from "../../../api";

export default function ProfileDetailView() {
  const { data: profileListing } = useQuery({
    queryKey: ["profileListing"],
    queryFn: () => newRequest.get(GET_PROFILES).then((res) => res.data),
  });
  const { profile } = profileListing ?? {};
  console.log(profile);
  console.log(profileListing);
  return (
    <div className="flex flex-col gap-4">
      <ProfileHeader userData={profileListing} />
      <NavItems />
      <div className="flex gap-x-5">
        <div className="flex-[0.7] flex flex-col gap-4  ">
          <CVHeadline profile={profile} />
          <KeySkills profile={profile} />
          <Summary userData={profileListing} />
          <Employment details={profile?.employer_details} />
          <ITSkills />
          <EducationDetails />
          <PersonalDetails />
          <DesiredJob />
          <CVCard />
        </div>

        <div className="w-full h-fit bg-white rounded  flex-[0.3] ">
          <div className="flex flex-col gap-y-4 px-6 py-4">
            <div className="flex justify-between">
              <p>100% Profile Complete</p>
              <p className="text-[#275DF5]">Updated Today</p>
            </div>
            <div className="border-b-2 border-[#00000080] py-3 ">
              <h4>You’ve done a great job!</h4>
              <p className="">
                Completing all the required fields will help you to attract more
                employers and job opportunities.
              </p>
              <p className="my-4">Go an extra mile to grab the best for you!</p>
            </div>

            <div className="flex flex-col gap-y-4 text-sm">
              <p className="text-sm">
                Follow the following tips for better result in Job Search!
              </p>
              <div className="flex gap-4 items-center">
                <div className="rounded-full size-6 bg-[#309840] text-lg flex items-center justify-center text-white p-1">
                  <Check className="size-4" />
                </div>
                <p>
                  Keep on updating your profile for better job search experience
                  and results
                </p>
              </div>
              <div className="flex gap-4">
                <div className="rounded-full size-6 bg-[#309840]  flex items-center justify-center text-white p-1">
                  <Check className="size-4" />
                </div>

                <p>
                  Search for jobs matching for you and recommend the jobs for
                  others.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="rounded-full size-6 bg-[#309840] flex items-center justify-center text-white p-1">
                  <Check className="size-4" />
                </div>
                <p>
                  Download our Mobile Application for easy job search process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
