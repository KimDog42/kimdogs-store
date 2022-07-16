import React from 'react';
import GhostLoading from '../GhostLoading';

function AlertsFunction() {
  return (
    <div className="flex">
        <div className="flex flex-row pl-20 pt-5 space-x-8 items-center">
        <div className="bg-gray-900 rounded text-white p-5">
            <h2>NEW</h2>
            <hr/>
            <h2>Check out our new Marketplace!</h2>
            <a className="bg-blue-500" >Go to MarketPlace</a>
        </div>
        </div>
    </div>
  )
}

export default AlertsFunction