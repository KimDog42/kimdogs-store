import React from 'react';
import GhostLoading from '../GhostLoading';

function AlertsFunction() {
  return (
    <div className="flex jsutify">
        <div className="flex justify-center font-bold text-2xl pt-5">
            <h2>Alerts</h2>
        </div>
        <div className="flex flex-row pl-5">
        <GhostLoading/>
        </div>
    </div>
  )
}

export default AlertsFunction