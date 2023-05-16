import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import AboutComponent from "./subComponents/AboutComponent"
import { useTheme } from "react-jss"
import Style from "./subComponents/AboutComponent/Style"
const AboutSection = () => {
  const theme = useTheme()
  const classes = Style({ theme })

  const values = [
    {
      imgSrc: "images/VR Array 1.png",
      title: "Cutting Edge Technology",
      description:
        "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    },
    {
      imgSrc: "images/Line Chart 1.png",
      title: "Cross Device Compatibility",
      description:
        "Multi-device compatibility ensures that creating, viewing and providing quick and easy",
    },
    {
      imgSrc: "images/clock 1.png",
      title: "Tailer Mode Development",
      description:
        "Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs",
    },
  ]
  const [active, setActive] = useState(0)
  return (
    <Container fluid className={classes.AboutContainer}>
      <Container
        className={`d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className={classes.mainTitle}>
          About <span>CodeScape</span>
        </h3>
        <p className={classes.description}>
          At AFQ Tech, we believe in a systematic approach for any project be it
          complex or simple. We are a group of individuals with a various set of
          skill set varies from Digital Marketing to IoT/Robotics solutions. We
          have our dedicated team for your project which uses various methods
          such as agile Scrum & agile Kanban. We ensure top-notch quality,
          on-time delivery, and agility for your project.
        </p>
      </Container>
      <Container fluid>
        <Row wrap="wrap">
          {values.map((item, index) => {
            return (
              <Col key={index}
                className={`d-flex flex-column justify-content-center align-items-center`}
              >
                <AboutComponent
                  {...item}
                  variant={active === index ? "light" : "secondary"}
                  onClick={() => {
                    setActive(index)
                  }}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default AboutSection
