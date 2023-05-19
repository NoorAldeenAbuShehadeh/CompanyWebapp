import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import RightSideForm from "../../Components/RightSideForm";
import { routeNames } from "../../Utils/Utils";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.CONTACT_Us);
  }, []);

  return (  
      <div className="d-flex align-items-center justify-content-between">
        <div>
         <ContactForm />
        </div>
        <div >
          <RightSideForm />
        </div>
      </div>
  );
};

export default ContactUs;
