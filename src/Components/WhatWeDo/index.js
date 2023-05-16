import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import { useTheme } from "react-jss"
import { Data } from './Utils'
import Style from "./Style";
const WhatWeDo = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container fluid className={classes.mainContainer}>
      <Row>
        <h2 className={classes.mainTitle}>What we do</h2>
      </Row>
      <Row>
      {Data.map((item)=><Col> <ServiceCard {...item}/></Col>)}
      </Row>
    </Container>
  )
}

export default WhatWeDo