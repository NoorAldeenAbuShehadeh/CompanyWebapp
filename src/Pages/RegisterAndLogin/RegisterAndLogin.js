import React, { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Container, Tabs, Tab } from "react-bootstrap";
import { useTheme } from "react-jss";
import { routeNames } from "../../Utils/Utils"
import RightSideForm from "../../Components/RightSideForm";
import SignInForm from './SubComponents/SignInForm'
import SignUpForm from "./SubComponents/SignUpForm";
import Style from "../ContactUs/Style";
import SEO from "../../Components/SEO";
const RegisterAndLogin = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
      setActiveTab(routeNames.RegisterAndLogin)
    }, [])
    const theme = useTheme();
    const classes = Style(theme);
    const [active, setActive] = useState('sign in')
    const handleTabChange = (key) => {
      setActive(key);
    };
  return (
    <div className={`d-flex justify-content-between ${classes.mainContainer}`}>
    <SEO description={"register or login to the website"} titleTemplate={"RegisterAndLogin"}/>
    <Container fluid className="m-1">
    <Tabs
      className="mb-3"
      activeKey={active}
      onSelect={handleTabChange}
    >
      <Tab eventKey="sign in" title="sign in">
        <p className="p-3"></p>
        <SignInForm />
      </Tab>
      <Tab eventKey="sign up" title="sign up">
        <SignUpForm handleTabChange={handleTabChange}/>
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