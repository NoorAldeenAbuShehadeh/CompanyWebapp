import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../Components/Navigation"
import { routeNames } from "../Utils/Utils"

function PageLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME)

  return (
    <div>
      <Navigation activeTab={activeTab} />
      <Outlet context={setActiveTab} />
    </div>
  )
}

export default PageLayout