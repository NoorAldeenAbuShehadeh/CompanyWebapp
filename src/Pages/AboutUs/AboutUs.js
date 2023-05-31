import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import HeroSection from "./SubComponents/HeroSection";
import TeamPost from "../../Components/TeamPost";
import EngagedWith from "./SubComponents/EngagedWith";
import { Data } from "./Utils/Utils";
import Carousel from "../../Components/Slider/Carousel";
import { useTheme } from "react-jss";
import Style from "./Style";
import StayInLoop from "../../Components/StayInLoop";
const AboutUs = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_Us);
  }, []);
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container fluid className="mt-5">
      <Container>
        <HeroSection />
        <Row className={classes.TeamContainer}>
          <h2 className={classes.TeamContainerTitle}>Meat Our Team</h2>
          <Carousel>
            {Data.map((item, index) => (
              <TeamPost {...item} key={index} />
            ))}
          </Carousel>
        </Row>
      </Container>
      <Row className={classes.EngagedWith}>
        <EngagedWith />
      </Row>
      <Row>
        <Container className="p-5">
          <StayInLoop />
        </Container>
      </Row>
    </Container>
  );
};

export default AboutUs;
