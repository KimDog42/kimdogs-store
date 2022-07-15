import React from 'react';
import { Loading } from "@nextui-org/react";

function SignIn() {
  return (
    <div className="bg-black h-screen flex justify-center">
        <div>

            <div>
                <h2 className="text-bold text-2xl text-white flex justify-center">Continue With These Login Providers</h2>
                <div className="pt-80">   
                <Loading textColor="secondary" color="error" size="xl">SIGN IN WITH ONE OF THE PROVIDERS BELOW TO CONTINUE</Loading>
                </div>
            </div>
            <div className="text-white flex items-center space-x-2 pt-40 justify-center">
                <a href="LoginSuccess" className="bg-blue-500 rounded-full p-5">Google</a>
                <a href="LoginSuccess" className="bg-blue-500 rounded-full p-5">Twitter</a>
                <a href="LoginSuccess" className="bg-blue-500 rounded-full p-5">GitHub</a>
            </div>
        </div>
    </div>
  )
}

export default SignIn