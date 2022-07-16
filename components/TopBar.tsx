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
    <div className="pt-5 shadow-2xl h-30 pb-5 bg-black">
    <div className="flex justify-end pr-10">
        <Profile/>
    </div>

    <div className="pl-10 flex items-center absolute top-6 left-0 space-x-5">
    <Grid.Container>
      <Grid>
      <Tooltip content="Home" placement="bottom" color="invert">
        <a href="/">
    <HomeIcon className="h-10 flex items-center text-white transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>

      <Grid.Container>
      <Grid>
      <Tooltip content="Search" placement="bottom" color="invert">
        <a href="/Search">
    <SearchIcon className="h-10 flex items-center text-white  transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>

      <Grid.Container>
      <Grid>
      <Tooltip content="Friends" placement="bottom" color="invert">
        <a href="/Friends">
    <UserGroupIcon className="h-10 flex items-center text-whitetransition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded text-white"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>

      <Grid.Container>
      <Grid>
      <Tooltip content="Marketplace" placement="bottom" color="invert">
        <a href="/Shop/Marketplace">
    <ShoppingBagIcon className="h-10 flex items-center text-whitetransition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded text-white"/>
    </a>
    </Tooltip>
      </Grid>
      </Grid.Container>
    </div>

    </div>
  )
}

export default TopBar