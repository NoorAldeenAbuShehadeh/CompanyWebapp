import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import RightSideForm from "../../Components/RightSideForm";
import { routeNames } from "../../Utils/Utils";
import ContactForm from "./ContactForm";
import Style from "./Style";
import { useTheme } from "react-jss";
const ContactUs = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.CONTACT_Us);
  }, []);
  const theme = useTheme();
  const classes = Style(theme);
  return (  
      <div className={`d-flex align-items-center justify-content-between ${classes.mainContainer}`}>
        <Container fluid >
          <h2 className={classes.text}>Contact <span>Us</span></h2>
          <ContactForm />
        </Container>
        <Container fluid className={`m-0 p-0 ${classes.RightSideForm}`} >
          <RightSideForm />
        </Container>
      </div>
  );
};

export default ContactUs;
