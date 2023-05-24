import React, { useState } from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "../../ContactUs/Style";
import { useTheme } from "react-jss";
import StoreNewData from '../../../Utils/Firebase/StoreNewData'
import SignUpFirebase from '../../../Utils/Firebase/SignUpFirebase'

const SignUpForm = ({handleTabChange}) => {
    const theme = useTheme();
    const classes = Style(theme);
    const [user,setUser] = useState({name:'',email:'',address:'',password:''});

    const handleSignUp = async (User)=>{
      try {
        if(!User.name)
        {
          throw new Error("please enter Full Name")
        }
        let token = await SignUpFirebase(User.email,User.password);
        StoreNewData("Users",User);
        handleTabChange('sign in')
      } catch (error) {
        console.log(error)
      }
      
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,}))
      }

  return (
    <Form className={`${classes.Form} `}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Write your name" name='name' onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="email" placeholder="Sample@gmail.com" name='email' onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
      <Form.Label>Your Address</Form.Label>
      <Form.Control type="text" placeholder="write your address" name='address' onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
      <Form.Label>Your Password</Form.Label>
      <Form.Control type="password" placeholder="write your password" name='password' onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col >
        <Button onClick={()=>{
          handleSignUp(user);
        }}>
          sign up <BsArrowRight />
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default SignUpForm