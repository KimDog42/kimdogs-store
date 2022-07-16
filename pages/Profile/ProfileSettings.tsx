import React from 'react'
import SettingsSidebar from '../../components/Profile/SettingsSidebar'
import TopBar from '../../components/TopBar'

function ProfileSettings() {
  return (
    <div className="bg-black h-screen overflow-y-scroll">
        <TopBar/>
        <SettingsSidebar/>
    </div>
  )
}

export default ProfileSettings