import React from 'react';
import { Input, Spacer } from "@nextui-org/react";

function EditProfileFunctions() {
  return (
    <div>
        <div className="flex justify-center pt-10 pl-10">
            <img 
            className="h-20 rounded-full"
            src="https://cdn.discordapp.com/attachments/881019698874032220/996202430532436038/avatars-000396781371-h4mpjo-t500x500.jpg"/>
        </div>

        <div>
            <h2 className="flex justify-center text-2xl font-semibold pl-10">Welcome, Guest!</h2>

            <h2 className="flex justify-center text-2xl font-semibold pl-10 pt-10">Edit Your Profile Name</h2>
            <div className="flex justify-center">
            <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
            </div>
        
        </div>
    </div>
  )
}

export default EditProfileFunctions