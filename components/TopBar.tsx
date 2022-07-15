import React from 'react';
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  CogIcon,
} from "@heroicons/react/outline"
import Profile from './profile';
import { Input, Tooltip, Button, Grid, Spacer } from "@nextui-org/react";

function TopBar() {
  return (
    <div className="pt-5 bg-gray-800">
    <div className="flex justify-end pr-10">
        <Profile/>
    </div>

    <div className="pl-10 flex items-center absolute top-6 left-0 space-x-5">
    <Grid.Container>
      <Grid>
      <Tooltip content="Home" placement="bottom" color="invert">
        <a href="/">
    <HomeIcon className="h-10 flex items-center text-white hover:text-blue-500"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>

      <Grid.Container>
      <Grid>
      <Tooltip content="Search" placement="bottom" color="invert">
        <a href="/Search">
    <SearchIcon className="h-10 flex items-center text-white hover:text-blue-500"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>

      <Grid.Container>
      <Grid>
      <Tooltip content="Friends" placement="bottom" color="invert">
        <a href="/Friends">
    <UserGroupIcon className="h-10 flex items-center text-white hover:text-blue-500"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
    </div>

    </div>
  )
}

export default TopBar