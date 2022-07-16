import React from 'react';
import {
    UserIcon,
} from "@heroicons/react/outline"

function SettingsSidebar() {
  return (
    <div>
        <div className="absolute top-20 left-0 pl-5 pt-3 overflow-scroll h-full scrollbar-hide flex flex-col">
            <h2 className="font-bold text-2xl">General Settings</h2>
            <div>
            <UserIcon/>
            <a href="#">Edit Profile</a>
            </div>
        </div>
    </div>
  )
}

export default SettingsSidebar