import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import HeroSection from "../../Components/HeroSection"
const Home = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.HOME);
  }, []);

  return (
    <HeroSection />
  )
}

export default Home