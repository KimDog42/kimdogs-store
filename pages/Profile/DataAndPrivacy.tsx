import React from 'react'
import DataAndPrivacyFunctions from '../../components/Profile/DataAndPrivacyFunctions'
import SettingsSidebar from '../../components/Profile/SettingsSidebar'
import TopBar from '../../components/TopBar'

function DataAndPrivacy() {
  return (
    <div className="bg-black h-screen">
        <TopBar/>
        <SettingsSidebar/>
        <DataAndPrivacyFunctions/>
    </div>
  )
}

export default DataAndPrivacy