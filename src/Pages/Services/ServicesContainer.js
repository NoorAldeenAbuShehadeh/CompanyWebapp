import React, { useEffect, useState } from "react"
import { useOutletContext, Outlet } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import { ServicesContext } from "./Utils"
const ServicesContainer = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
          setActiveTab(routeNames.SERVICES)
      }, [])
    const [services,setServices]=useState()
  return (
    <ServicesContext.Provider value={[services,setServices]}>
        <Outlet/>
    </ServicesContext.Provider>
  )
}

export default ServicesContainer