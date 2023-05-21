import React from "react";
import Style from "./Style";
import { useTheme } from "react-jss";
import { Container, Row, Col } from "react-bootstrap";
import { TbPointFilled } from 'react-icons/tb'
const RightSideForm = () => {
  const theme = useTheme();
  const classes = Style(theme);
  return (
    <Container fluid className={`${classes.container}`}>
      <Container>
      <Row >
        <div className={classes.addressContainer}>
            <h2 className={classes.addressTitle}><TbPointFilled color="#F28482" size={40}/> Address</h2>
            <p className={classes.addressContent}>
            No 7, Katherine Place, Melbourne 3000, VIC Australia
            </p>
        </div>
      </Row>
      <Row className={classes.info}>
        <Col>+61 420 992 332</Col>
        <Col>info@afq.com.au</Col>
        <Col>www.afqtech.com.au</Col>
      </Row>
      </Container>
    </Container>
  );
};

export default RightSideForm;
