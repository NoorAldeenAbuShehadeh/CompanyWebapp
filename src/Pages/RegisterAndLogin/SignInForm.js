import React from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "../ContactUs/Style";
import { useTheme } from "react-jss";
const SignInForm = () => {
    const theme = useTheme();
    const classes = Style(theme);
  return (
    <Form className={`${classes.Form} `}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="email" placeholder="Sample@gmail.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your password</Form.Label>
      <Form.Control type="text" placeholder="Write your password" />
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col>
        <Button>
          Sign in <BsArrowRight />{" "}
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default SignInForm