import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import { useTheme } from "react-jss";
import Style from "./Style";
import { footerKeywords } from "./footerkeywords";
const Footer = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <>
      <footer className={`text-light py-3`}>
        <Container fluid className={classes.container}>
          <Row>
            <Col md={3} >
              <h4>Key Words</h4>
              {footerKeywords.map((item) => (
                <Button
                  variant="secondary"
                  className={`m-1 ${classes.keyWord}`}
                >
                  {item}
                </Button>
              ))}
            </Col>
            <Col md={3}>
              <h4>CodeScape Solutions</h4>
              <Form className="d-flex m-2">
                <FormControl type="text" placeholder="Search" className={classes.searchInput}/>
                <Button>
                  <FaSearch />
                </Button>
              </Form>
              <h5 className="m-3">Entering data keys to search for it.</h5>
              <h5 className="m-3">Entering data keys to search for it.</h5>
            </Col>
            <Col md={3}>
              <h4>KNOWLEDGE BASE</h4>
              <p>Digital Marketing</p>
              <p>Content Marketing</p>
              <p>Social Media</p>
              <p>Content Marketing</p>
              <p>SEO</p>
            </Col>
            <Col md={3}>
            <Button variant="secondary" className="m-1"><BsYoutube/></Button>
            <Button variant="secondary" className="m-1"><BsTwitter/></Button>
            <Button variant="secondary" className="m-1"><BsInstagram/></Button>
            <Button variant="secondary" className="m-1"><BsFacebook/></Button>
            </Col>
            </Row>
        </Container>
      </footer>
      <Container className="d-flex justify-content-center p-2">
        © Copyright ©2021 All rights reserved | Powered by Lorem
      </Container>
    </>
  );
};

export default Footer;
