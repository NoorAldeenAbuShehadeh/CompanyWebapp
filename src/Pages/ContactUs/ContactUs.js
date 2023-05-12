import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";

const ContactUs = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.CONTACT_Us);
  }, []);

  return (
    <div>ContactUs</div>
  )
}

export default ContactUs