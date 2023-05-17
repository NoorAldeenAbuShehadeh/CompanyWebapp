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
      <footer className={`text-light py-3 `}>
        <Container fluid className={classes.container}>
          <Row wrap="wrap" className={`d-flex justify-content-center ${classes.rowBorder}`}>
            <Col className={classes.colWidth}>
              <h4>Key Words</h4>
              {footerKeywords.map((item,index) => (
                <Button key={index}
                  variant="secondary"
                  className={`m-1 ${classes.keyWord}`}
                >
                  {item}
                </Button>
              ))}
            </Col>
            <Col className={classes.colWidth}>
              <h4>CodeScape Solutions</h4>
              <Form className="d-flex m-2">
                <FormControl type="text" placeholder="Search" className={classes.searchInput}/>
                <Button>
                  <FaSearch />
                </Button>
              </Form>
              <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
            </Col>
            <Col className={classes.colWidth}>
              <h4>KNOWLEDGE BASE</h4>
              <p>Digital Marketing</p>
              <p>Content Marketing</p>
              <p>Social Media</p>
              <p>Content Marketing</p>
              <p>SEO</p>
            </Col>
            <Col className={classes.colWidth}>
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, City, Country</li>
              <li>Email: info@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
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
