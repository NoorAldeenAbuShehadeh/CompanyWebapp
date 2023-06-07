import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import HeroSection from "../../Components/HeroSection"
import AboutSection from "../../Components/AboutSection"
import WhatWeDo from "../../Components/WhatWeDo"
import Statistics from "../../Components/Statistics"
import HomeNews from "../../Components/HomeNews"
import SEO from "../../Components/SEO"
const Home = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.HOME)
  }, [setActiveTab])

  return (
    <>
    <SEO titleTemplate={"Home"}/>
    <HeroSection />
    <AboutSection />
    <hr/>
    <WhatWeDo />
    <Statistics />
    <HomeNews />
    </>
  )
}

export default Home