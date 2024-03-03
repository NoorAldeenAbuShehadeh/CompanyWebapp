import React, {useState} from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "./Style";
import { useTheme } from "react-jss";
import sendEmail from './SendEmail';

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const ContactForm = () => {
  const theme = useTheme();
  const classes = Style(theme);
  const [email, setEmail] = useState({name:'',email:'',message:''});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevState) => ({
      ...prevState,
      [name]: value,}))
    }
  const handleSend=async()=>{
    if(validateEmail(email.email)){
    const received = await sendEmail(email.name,email.email,email.message,"jjjjjjjjjj220379@gmail.com")
    if(received){
      window.alert('email send successfully')
    }else{
      window.alert('Error occurred')
    }
  }else{
    window.alert('your email wrong')
  }

  }

  return (
    <Form className={`${classes.Form} `}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Write your name" name='name' onChange={(e)=>{handleChange(e)}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="email" placeholder="Sample@gmail.com" name='email' onChange={(e)=>{handleChange(e)}}/>
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
        name='message'
        onChange={(e)=>{handleChange(e)}}
        style={{ resize: 'none' }}
      />
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col className='d-flex flex-column align-items-end'>
        <Button onClick={handleSend}>
          Send <BsArrowRight />
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default ContactForm
