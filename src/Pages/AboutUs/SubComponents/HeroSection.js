import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTheme } from "react-jss";
import Style from "../Style";
const HeroSection = () => {
    const theme = useTheme();
    const classes = Style({ theme });
  return (
    <Container>
        <Row className={`align-items-center ${classes.contentContainer}`}>
            <Col className="d-flex flex-column">
                <h2 className={classes.title}>Who<span> we are....</span></h2>
                <p className={classes.description}>
                At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.
                </p>
            </Col>
            <Col className={`d-flex flex-column ${classes.heroImgContainer}`}>
                <img src='images/heroImageAboutUs.png' alt='' className={classes.heroImg}></img>
            </Col>
        </Row>
    </Container>
  )
}

export default HeroSection