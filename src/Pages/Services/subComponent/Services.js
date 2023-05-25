import React, { useEffect } from "react"
import { Container,Row, Col, Button } from 'react-bootstrap'
import ServiceComponent from "../../../Components/ServiceComponent"
import { useTheme } from "react-jss";
import titleStyle from '../../News/Style'
import Style from '../Style'
import RetrieveData from '../../../Utils/Firebase/RetrieveData'
import { useNavigate } from 'react-router-dom';
import { useServicesContext } from "../Utils";
import { useUserContext } from "../../../Utils/userContext";
const Services = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeUser] = useUserContext();
  const [services,setServices]= useServicesContext();
  const text = titleStyle({ theme});
  const classes = Style();
  useEffect(() => {
    RetrieveData('Services').then((response)=>{
      setServices(response)
    })
  }, [])

  return (
    <Container className={classes.servicesContainer}>
      <Row className="d-flex align-items-center justify-content-between">
        <Col><h2 className={text.title} style={{textAlign:'start'}}>Our <span>Services</span></h2></Col>
        {
          activeUser?.role==='admin'&&
          <Col className="d-flex align-items-center justify-content-end"><Button variant="primary" onClick={()=>navigate('add')}>add Service </Button></Col>
        }
      </Row>
      {
        services?.map((item,index)=>
        <Row key={index} className={`d-flex align-items-center justify-content-center`}>
          <ServiceComponent index={index} {...item}/>
        </Row>)
      }
    </Container>
  )
}

export default Services