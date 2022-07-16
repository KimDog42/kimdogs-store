import React from 'react';
import {
    UserIcon,
    LockClosedIcon,
    DatabaseIcon,
    CreditCardIcon,
} from "@heroicons/react/outline";
import { Tooltip, Button, Grid } from "@nextui-org/react";

function SettingsSidebar() {
  return (
    <div className="bg-black">
        <div className="absolute top-20 left-0 pl-5 pt-3 overflow-scroll h-full scrollbar-hide flex flex-col bg-black pr-5">
            <h2 className="font-bold text-2xl text-white flex items-center">General Settings</h2>

            <div className="flex items-center font-semibold pt-5 space-x-3">
            <Tooltip
          color="invert"
          content="Edit Your User Profile Options"
          placement="right"
        >
            <UserIcon className="h-10 text-white"/>
            <a href="/Profile/EditProfile" className="text-white flex items-center">Edit Profile</a>
            </Tooltip>
            </div>

            <div className="flex items-center font-semibold pt-5">
            <Tooltip
          color="invert"
          content="Edit Your Data And Privacy Options"
          placement="right"
        >
            <DatabaseIcon className="h-10 text-white"/>
            <a href="/Profile/DataAndPrivacy" className="text-white flex items-center">Data And Privacy</a>
            </Tooltip>
            </div>

            <div className="flex items-center font-semibold pt-5">
            <Tooltip
          color="invert"
          content="Edit Your Subscriptions and Payment Options"
          placement="right"
        >
            <CreditCardIcon className="h-10 text-white"/>
            <a href="#" className="text-white flex items-center">Subscriptions and Billing</a>
            </Tooltip>
            </div>

        </div>
    </div>
  )
}

export default SettingsSidebar