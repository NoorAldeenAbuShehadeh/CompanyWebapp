import React, { useEffect, useState } from "react";
import { useOutletContext, Outlet } from "react-router-dom";
import SEO from "../../Components/SEO";
import { routeNames } from "../../Utils/Utils";
import { EmployeesContext } from "./Utils/Utils";
const AboutUsContainer = () => {
  const setActiveTab = useOutletContext();
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_Us);
  }, []);
  const [employee, setEmployee] = useState();
  return (
    <EmployeesContext.Provider value={[employee, setEmployee]}>
      <SEO description={"show information about the company"} titleTemplate={"About"} key={5}/>
      <Outlet />
    </EmployeesContext.Provider>
  );
};

export default AboutUsContainer;
