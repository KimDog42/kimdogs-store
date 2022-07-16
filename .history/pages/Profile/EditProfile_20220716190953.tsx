import React from 'react'
import TopBar from '../../components/TopBar'
import SettingsSidebar from "../../components/Profile/SettingsSidebar"
import EDitProfileFunctions from ""

function EditProfile() {
  return (
    <div>
        <TopBar/>
        <SettingsSidebar/>
        <EditProfileFunctions/>
    </div>
  )
}

export default EditProfile