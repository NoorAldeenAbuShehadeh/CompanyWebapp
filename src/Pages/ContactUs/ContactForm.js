import React from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "./Style";
import { useTheme } from "react-jss";
const ContactForm = () => {
  const theme = useTheme();
  const classes = Style(theme);
  return (
    <Form className={`${classes.Form} `}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Write your name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="email" placeholder="Sample@gmail.com" />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Message</Form.Label>
      <Form.Control
        as="textarea"
        rows={6}
        placeholder="Write here..........."
        style={{ resize: 'none' }}
      />
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col className='d-flex flex-column align-items-end'>
        <Button>
          Send <BsArrowRight />
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default ContactForm