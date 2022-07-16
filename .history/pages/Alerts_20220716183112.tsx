import React from 'react'
import TopBar from '../components/TopBar'
import AlertsFunction from "../components/Alerts/AlertsFunction"

function Alerts() {
  return (
    <div className="h-screen">
        <TopBar/>
        <AlertsFunction/>
    </div>
  )
}

export default Alerts