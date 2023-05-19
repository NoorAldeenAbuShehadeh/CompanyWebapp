import React, { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { useTheme } from "react-jss";
import { routeNames } from "../../Utils/Utils"
import RightSideForm from "../../Components/RightSideForm";
import SignInForm from './SignInForm'
import SignUpForm from "./SignUpForm";
import Style from "../ContactUs/Style";
const RegisterAndLogin = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
      setActiveTab(routeNames.RegisterAndLogin)
    }, [])
    const theme = useTheme();
    const classes = Style(theme);
    const [operation, setOperation] = useState("sign in")
  return (
    <div fluid className={`d-flex align-items-center justify-content-between ${classes.mainContainer}`}>
    <Container fluid >
    <ButtonGroup size="lg" className={`mb-2 ${classes.text}`}>
        <Button variant={operation==="sign in"?"primary":"secondary"} onClick={()=>setOperation("sign in")}>sign in</Button>
        <Button variant={operation==="sign up"?"primary":"secondary"} onClick={()=>setOperation("sign up")}>sign up</Button>
    </ButtonGroup>
    {
        operation==="sign in"?<SignInForm />: <SignUpForm />
    }   
    </Container>
    <Container fluid className={`m-0 p-0 ${classes.RightSideForm}`} >
      <RightSideForm />
    </Container>
  </div>
  )
}

export default RegisterAndLogin