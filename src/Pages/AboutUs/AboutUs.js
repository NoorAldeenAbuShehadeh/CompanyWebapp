import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import HeroSection from "./HeroSection"
const AboutUs = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_Us)
  }, [])
  
  return (
    <Container>
      <HeroSection />
    </Container>
  )
}

export default AboutUs