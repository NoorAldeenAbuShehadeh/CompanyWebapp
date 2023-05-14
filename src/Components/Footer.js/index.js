import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "react-jss";
import Style from "./Style";
const Footer = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <>
      <footer className={`text-light py-3`}>
        <Container fluid className={classes.container}>
          <Row>
            <Col md={3} className="border-end">
              <h4>Key Words</h4>
              {[
                "News",
                "Services",
                "Web Design Services",
                "Quality",
                "Structure",
                "Marketing Services",
                "loyalty",
                "Sincerity",
                "Digital Marketing",
              ].map((item) => (
                <Button
                  variant="secondary"
                  className={`m-1 ${classes.keyWord}`}
                >
                  {item}
                </Button>
              ))}
            </Col>
            <Col md={3} className="border-end ">
              <h4>CodeScape Solutions</h4>
              <Form className="d-flex m-2">
                <FormControl type="text" placeholder="Search" />
                <Button>
                  <FaSearch />
                </Button>
              </Form>
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
              <h4>Column 4</h4>
              <p>Content for column 4</p>
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
