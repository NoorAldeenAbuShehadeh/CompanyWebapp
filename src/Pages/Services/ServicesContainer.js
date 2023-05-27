import React, { useEffect, useState } from "react"
import { useOutletContext, Outlet } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import { servicesContext } from "./Utils"
const ServicesContainer = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
          setActiveTab(routeNames.SERVICES)
      }, [])
    const [services,setServices] = useState();
  return (
        <servicesContext.Provider value={[services,setServices]}>
            <Outlet/>
        </servicesContext.Provider>
  )
}

export default ServicesContainer