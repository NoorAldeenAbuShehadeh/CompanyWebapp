import React from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
const ContactForm = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Write your name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
      />
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col>
        <Button className="p-3">
          Send <BsArrowRight />{" "}
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default ContactForm