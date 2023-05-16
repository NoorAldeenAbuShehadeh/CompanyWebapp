import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Data } from './Utils' 
import StatisticComponent from './StatisticComponent'
import { useTheme } from "react-jss"
import Style from "./Styles";
const Statistics = () => {
    const theme = useTheme();
    const classes = Style({ theme });
  return (
    <Container fluid className={classes.container}>
        <Row>
            {Data.map((item)=><Col><StatisticComponent {...item}/></Col>)}
        </Row>
    </Container>
  )
}

export default Statistics