import React from 'react'
import TopBar from '../components/TopBar'
import AlertsFunction from "../components/Alerts/AlertsFunction"

function Alerts() {
  return (
    <div className="bg-gray-900 h-screen">
        <TopBar/>
        <AlertsFunction/>
    </div>
  )
}

export default Alerts