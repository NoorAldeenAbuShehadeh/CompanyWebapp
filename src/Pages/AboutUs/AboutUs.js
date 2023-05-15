import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"

const AboutUs = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_Us)
  }, [])
  
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs