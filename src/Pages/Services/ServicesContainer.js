import React, { useEffect, useState } from "react"
import { useOutletContext, Outlet } from "react-router-dom"
import SEO from "../../Components/SEO"
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
          <SEO description={"show the services in the company"} titleTemplate={"Services"}/>
          <Outlet/>
        </servicesContext.Provider>
  )
}

export default ServicesContainer