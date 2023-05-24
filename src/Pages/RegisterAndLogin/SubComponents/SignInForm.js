import React, {useState} from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "../../ContactUs/Style";
import { useTheme } from "react-jss";
import LogInFirebase from '../../../Utils/Firebase/LogInFirebase'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const theme = useTheme();
    const classes = Style(theme);
    const [user,setUser] = useState({email:'', password:''});
    const [cookies, setCookies] = useCookies();
    const navigate = useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,}))
      }

      async function handleLogIn(){
        try {
          let token = await LogInFirebase(user.email,user.password);
          setCookies("UserToken",token.user.accessToken)
          setCookies("UserEmail",token.user.email)
          navigate('/');
        } catch (error) {
          console.log(error)
        }
        
      }

  return (
    <Form className={`${classes.Form} `}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="email" placeholder="Sample@gmail.com" name='email' onChange={(e)=>handleChange(e)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label>Your password</Form.Label>
      <Form.Control type="text" placeholder="Write your password" name='password' onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Col>
        <Button onClick={handleLogIn}>
          Sign in <BsArrowRight />
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default SignInForm