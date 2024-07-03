import React from 'react'
import ProfileHeader from '../../../components/profile/ProfileHeader'
import NavItems from '../../../components/profile/NavItems'
import Employment from '../../../components/profile/Employment'
import ITSkills from '../../../components/profile/ITSkills'
import EducationDetails from '../../../components/profile/EducationDetails'
import PersonalDetails from '../../../components/profile/PersonalDetails'
import DesiredJob from '../../../components/profile/DesiredJob'
import CVCard from '../../../components/profile/CVCard'

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
