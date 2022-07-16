import React from 'react'
import TopBar from '../../components/TopBar'
import SettingsSidebar from "../../components/Profile/SettingsSidebar"

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