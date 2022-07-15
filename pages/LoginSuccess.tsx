import React from 'react';
import { Loading } from "@nextui-org/react";

function LoginSuccess() {
  return (
    <div className="bg-black h-screen flex justify-center">
    <div>

        <div className="pt-40">
            <div className="pt-80">   
            <Loading textColor="success" color="success" size="xl">YOU CAN NOW CONTINUE!</Loading>
            </div>
        </div>
        <div className="text-white flex items-center space-x-2 pt-40 justify-center">
            <a href="/" className="bg-blue-500 rounded-full p-5">Return to KimDog.store</a>
        </div>
    </div>
</div>
  )
}

export default LoginSuccess