import React from 'react';
import GhostLoading from '../GhostLoading';

function AlertsFunction() {
  return (
    <div className="flex">
        <div className="flex flex-row pl-5 pt-5 space-x-8">
        <GhostLoading/>
        <GhostLoading/>
        </div>
    </div>
  )
}

export default AlertsFunction