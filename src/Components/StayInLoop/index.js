import React from "react";
import {
  Alert,
  Col,
  Container,
  Row,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useTheme } from "react-jss"
import Style from "./Style"
const StayInLoop = () => {
    const theme = useTheme()
    const classes = Style({ theme })
  return (
    <Alert variant="secondary" className={`p-5 ${classes.AlertContainer}`}>
      <Container>
        <Row className="d-flex flex-wrap align-items-center justify-content-between">
          <Col md={6}>
            <h2 className={classes.title}>Stay in the loop</h2>
            <p className={classes.description}>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </p>
          </Col>
          <Col md={4}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter email address"
                aria-label="Enter email address"
              />
              <Button variant="primary">Continue</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Alert>
  );
};

export default StayInLoop;
