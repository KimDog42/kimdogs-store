import React from 'react';
import GhostLoading from '../GhostLoading';

function AlertsFunction() {
  return (
    <div className="flex">
        <div className="flex flex-row pl-20 pt-5 space-x-8 items-center">
        <div className="bg-gray-900 rounded text-white p-5">
            <h2>KimDog Just Mentioned Your In a New Post</h2>
            <a className="bg-blue-600 rounded">Check Out the Post you was Mentioned In</a>
        </div>
        </div>
    </div>
  )
}

export default AlertsFunction