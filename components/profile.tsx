import React from 'react'
import { Tooltip, Button, Grid, Avatar } from "@nextui-org/react";
import ProfileInfo from './ProfileInfo';
import { BellIcon, CogIcon } from '@heroicons/react/outline';

function profile() {
  return (
    <div className="flex justify-end pr-20 space-x-5">

<div className="flex justify-end items-center">
      <Grid.Container>
      <Grid>
      <Tooltip content="Notifications" placement="bottom" color="invert">
        <a href="/Alerts">
    <BellIcon className="h-10 flex items-center text-white hover:text-blue-500"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
      </div>

<div className="flex justify-end items-center">
      <Grid.Container>
      <Grid>
      <Tooltip content="Settings" placement="bottom" color="invert">
        <a href="/Profile/Settings">
    <CogIcon className="h-10 flex items-center text-white hover:text-blue-500"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
      </div>

       <Grid.Container alignItems="center">
      <Grid>
        <Tooltip placement="bottom" content={<ProfileInfo />} color="invert">
          <Avatar
            pointer
            size="xl"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif"
            color="gradient"
            bordered
            squared
          />
        </Tooltip>
      </Grid>
    </Grid.Container>

    </div>
  )
}

export default profile