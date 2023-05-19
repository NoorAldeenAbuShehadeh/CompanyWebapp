import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import { Container,Row } from 'react-bootstrap'
import { ServicesData } from "./Utils"
import ServiceComponent from "../../Components/ServiceComponent"
import { useTheme } from "react-jss";
import titleStyle from '../News/Style'
import Style from './Style'
const Services = () => {
  const theme = useTheme();
  const text = titleStyle({ theme});
  const classes = Style();
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.SERVICES)
  }, [])

  return (
    <Container className={classes.servicesContainer}>
      <h2 className={text.title} style={{textAlign:'start'}}>Our <span>Services</span></h2>
      {
        ServicesData.map((item,index)=>
        <Row key={index} className={`d-flex align-items-center justify-content-center`}>
          <ServiceComponent index={index} {...item}/>
        </Row>)
      }
    </Container>
  )
}

export default Services