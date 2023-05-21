import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Logos } from './Utils/EngagedWithLogos'
import { useTheme } from "react-jss";
import Style from "./Style";
const EngagedWith = () => {
    const theme = useTheme();
    const classes = Style({ theme });
  return (
    <Container fluid className='d-flex flex-column align-items-center p-5'>
        <h1 className={`m-2 ${classes.EngagedWithTitle}`}>Who we are engaged with...</h1>
        <p className={`m-2 ${classes.EngagedWithText}`}>We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
        <Row className={`d-flex align-items-center justify-content-center ${classes.logoContainer}`}>
            {Logos.map((item,index)=>
            <Col key={index} className='d-flex align-items-center justify-content-center m-2'>
                <img src={item} alt=''></img>
            </Col>
            )}
        </Row>
    </Container>
  )
}

export default EngagedWith