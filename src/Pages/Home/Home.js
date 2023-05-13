import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import HeroSection from "../../Components/HeroSection"
import AboutSection from "../../Components/AboutSection"
const Home = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.HOME)
  }, [setActiveTab])

  return (
    <>
    <HeroSection />
    <AboutSection />
    <hr/>
    </>
  )
}

export default Home