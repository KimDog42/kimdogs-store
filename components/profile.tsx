import React from 'react'
import { Tooltip, Button, Grid, Avatar } from "@nextui-org/react";
import ProfileInfo from './ProfileInfo';
import { BellIcon, CogIcon } from '@heroicons/react/outline';

function profile() {
  return (
    <div className="flex justify-end space-x-5">

<div className="flex justify-end items-center">
      <Grid.Container>
      <Grid>
      <Tooltip content="Notifications" placement="bottom" color="invert">
        <a href="/Alerts">
      <BellIcon className="h-10 flex items-center text-white  transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
      </div>

<div className="flex justify-end items-center">
      <Grid.Container>
      <Grid>
      <Tooltip content="Settings" placement="bottom" color="invert">
        <a href="/Profile/EditProfile">
    <CogIcon className="h-10 flex items-center text-white transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
      </div>

       <Grid.Container alignItems="center">
      <Grid>
        <Tooltip placement="bottom" content={<ProfileInfo />} color="invert">
          <a 
          href="/SignIn"
          className="text-white font-bold bg-blue-600 rounded p-2 hover:bg-gray-600 transition delay-150 duration-300 ease-in-out">Sign In Or Sign Up</a>
        </Tooltip>
      </Grid>
    </Grid.Container>

    </div>
  )
}

export default profile