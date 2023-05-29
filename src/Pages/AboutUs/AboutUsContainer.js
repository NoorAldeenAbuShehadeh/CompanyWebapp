import React, { useEffect, useState } from "react";
import { useOutletContext, Outlet } from "react-router-dom";
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
      <Outlet />
    </EmployeesContext.Provider>
  );
};

export default AboutUsContainer;
