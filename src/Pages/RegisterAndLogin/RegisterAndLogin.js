import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { Container, Tabs, Tab } from "react-bootstrap";
import { useTheme } from "react-jss";
import { routeNames } from "../../Utils/Utils"
import RightSideForm from "../../Components/RightSideForm";
import SignInForm from './SubComponents/SignInForm'
import SignUpForm from "./SubComponents/SignUpForm";
import Style from "../ContactUs/Style";
const RegisterAndLogin = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
      setActiveTab(routeNames.RegisterAndLogin)
    }, [])
    const theme = useTheme();
    const classes = Style(theme);
  return (
    <div fluid className={`d-flex justify-content-between ${classes.mainContainer}`}>
    <Container fluid className="m-1">
    <Tabs
      defaultActiveKey="sign in"
      className="mb-3"
    >
      <Tab eventKey="sign in" title="sign in">
        <p className="p-3"></p>
        <SignInForm />
      </Tab>
      <Tab eventKey="sign up" title="sign up">
        <SignUpForm />
      </Tab>
    </Tabs>
    </Container>
    <Container fluid className={`m-0 p-0 ${classes.RightSideForm}`} >
      <RightSideForm />
    </Container>
  </div>
  )
}

export default RegisterAndLogin