import React from 'react';
import {
    UserIcon,
    LockClosedIcon,
    DatabaseIcon,
    CreditCardIcon,
} from "@heroicons/react/outline"

function SettingsSidebar() {
  return (
    <div className="bg-black">
        <div className="absolute top-20 left-0 pl-5 pt-3 overflow-scroll h-full scrollbar-hide flex flex-col bg-black pr-5">
            <h2 className="font-bold text-2xl tex">General Settings</h2>

            <div className="flex items-center font-semibold pt-5">
            <UserIcon className="h-10 text-white"/>
            <a href="#" className="text-white">Edit Profile</a>
            </div>

            <div className="flex items-center font-semibold pt-5">
            <DatabaseIcon className="h-10 text-white"/>
            <a href="#" className="text-white">Data And Privacy</a>
            </div>

            <div className="flex items-center font-semibold pt-5">
            <CreditCardIcon className="h-10 text-white"/>
            <a href="#" className="text-white">Subscriptions and Billing</a>
            </div>

        </div>
    </div>
  )
}

export default SettingsSidebar