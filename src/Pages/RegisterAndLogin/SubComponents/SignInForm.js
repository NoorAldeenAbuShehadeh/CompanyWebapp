import React, {useState} from 'react'
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Style from "../../ContactUs/Style";
import { useTheme } from "react-jss";
import LogInFirebase from '../../../Utils/Firebase/LogInFirebase'
import RetrieveData from '../../../Utils/Firebase/RetrieveData'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Utils/userContext'
const SignInForm = () => {
    const theme = useTheme();
    const classes = Style(theme);
    const [error,setError] = useState(null)
    const [user,setUser] = useState({email:'', password:''})
    const [cookies, setCookies] = useCookies()
    const navigate = useNavigate()
    const [activeUser ,setActiveUser] = useUserContext()
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,}))
      }

      async function handleLogIn(){
        try {
          setError(null)
          if(!user.email)throw new Error('please enter your email')
          if(!user.password)throw new Error('please enter your password')
          let token = await LogInFirebase(user.email,user.password);
          const activeUser = await RetrieveData("Users","email",token.user.email)
          setCookies("UserToken",token.user.accessToken)
          setCookies("UserEmail",token.user.email)
          setCookies("role",activeUser[0].role)
          setActiveUser({email: token.user.email, token: token.user.accessToken, role: activeUser[0].role})
          navigate('/');
        } catch (error) {
          setError(error.toString().split(":"))
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
    {
      error? <Alert key='danger' variant='danger'>
          {error[error.length-1]}
        </Alert>:<></>
        }
  </Form>
  )
}

export default SignInForm