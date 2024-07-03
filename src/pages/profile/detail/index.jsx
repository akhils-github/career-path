import React from 'react'
import ProfileHeader from '../../../components/profile/ProfileHeader'
import NavItems from '../../../components/profile/NavItems'

export default function ProfileDetailView() {
  return (
    <div>
        <ProfileHeader/>
        <NavItems/>
        <Employment/>
        <ITSkills/>
        <EducationDetails/>
        <PersonalDetails/>
        <DesiredJob/>
        <CVCard/>
    </div>
  )
}
