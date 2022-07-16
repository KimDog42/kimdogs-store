import React from 'react';
import { Input, Spacer, Grid, Switch, Checkbox } from "@nextui-org/react";

function EditProfileFunctions() {
  return (
    <div className="bg-black h-screen overflow-hidden">
        <div className="flex justify-center pt-10 pl-10">
            <img 
            className="h-20 rounded-full"
            src="https://cdn.discordapp.com/attachments/881019698874032220/996202430532436038/avatars-000396781371-h4mpjo-t500x500.jpg"/>
        </div>

        <div>
            <h2 className="flex justify-center text-2xl font-semibold pl-10 text-white">Welcome, Guest</h2>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10 text-white">Edit Your Profile Name</h2>
            <div className="flex justify-center pt-5 pl-6">
            <Input clearable bordered labelPlaceholder="" initialValue="Guest" size="xl" color="primary" status="primary"/>
            </div>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10 text-white">Edit Your Profile Password</h2>
            <div className="flex justify-center pt-5 pl-6">
            <Input clearable bordered labelPlaceholder="" initialValue="****************" size="xl" color="primary" status="primary"/>
            </div>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10 text-white">Edit Your Profile Description</h2>
            <div className="flex justify-center pt-5 pl-6">
            <Input clearable bordered labelPlaceholder="" initialValue="No Description" size="xl" color="primary" status="primary"/>
            </div>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10 text-white">Edit Your Date Of Birth(This is kept a Secret)</h2>
            <div className="flex justify-center pt-5">
            <Grid>
        <Input 
          width="186px" 
          type="date"
          color="primary"
          status="primary"
        />
      </Grid>
            </div>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10 text-white">Edit Your Profile Description Visibility</h2>
            
            <div className="flex justify-center pt-5 pl-6">
              <div className="flex items-center space-x-5">
              <Switch color="primary" initialChecked={true} bordered={true} size="lg"/>
              <h2 className="text-white">Public</h2>
              </div>
            </div>

            <div className="flex justify-center pt-5 pl-6">
              <div className="flex items-center space-x-5">
              <Switch color="primary" initialChecked={false} bordered={true} size="lg"/>
              <h2 className="text-white">Private</h2>
              </div>
            </div>

        </div>
    </div>
  )
}

export default EditProfileFunctions