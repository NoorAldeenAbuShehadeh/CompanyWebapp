import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer.js"
import Header from "../Components/Header"
import { routeNames } from "../Utils/Utils"

function PageLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME)

  return (
    <div>
      <Header activeTab={activeTab} />
      <Outlet context={setActiveTab} />
      <Footer />
    </div>
  )
}

export default PageLayout