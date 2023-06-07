import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroSection from "./HeroSection";
import TeamPost from "../../../Components/TeamPost";
import EngagedWith from "./EngagedWith";
import Carousel from "../../../Components/Slider/Carousel";
import { useTheme } from "react-jss";
import { useNavigate } from 'react-router-dom';
import Style from "../Style";
import StayInLoop from "../../../Components/StayInLoop";
import { useUserContext } from "../../../Utils/userContext";
import { useEmployeesContext } from "../Utils/Utils";
import RetrieveData from "../../../Utils/Firebase/RetrieveData";
import Loading from '../../../Components/Loading'
import DeleteItem from "../../../Utils/Firebase/DeleteItem";
const AboutUs = () => {
  const [activeUser] = useUserContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const [loading, setLoading] = useState(true)
  const classes = Style({ theme });
  const [employees, setEmployees] = useEmployeesContext()
  useEffect(()=>{
      RetrieveData('Employees').then((response)=>{
      setEmployees(response)
      setLoading(false)
  })},[])

  const handleUpdate =(index)=>{
    navigate('updateEmployee/'+index)
  }


  return (
    <Container fluid className="mt-5">
      <Container>
        <HeroSection />
        <Row className={classes.TeamContainer}>
          <h2 className={classes.TeamContainerTitle}>Meat Our Team</h2>
          {
            activeUser?.role==='admin'&&
            <Col className="d-flex align-items-center justify-content-end">
              <Button className="m-3" variant="primary" onClick={()=>{navigate('addEmployee')
                                                                      window.scroll(0,0)}}>add Employee</Button></Col>
          }
          {loading? <Loading />:
          <Carousel>
            {employees.map((item, index) => (
              <>
              <TeamPost {...item} key={index} />
              {activeUser?.role==='admin'&&
            <Container className='d-flex justify-content-end'>
            <Button className='m-2' onClick={()=>handleUpdate(index)}>Update</Button>
          </Container>}
              </>
              
            ))}
          </Carousel>
          }
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
