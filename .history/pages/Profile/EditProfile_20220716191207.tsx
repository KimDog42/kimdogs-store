import React from 'react'
import TopBar from '../../components/TopBar'
import SettingsSidebar from "../../components/Profile/SettingsSidebar"
import EditProfileFunctions from "../../components/Profile/EditProfileFunctions"

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