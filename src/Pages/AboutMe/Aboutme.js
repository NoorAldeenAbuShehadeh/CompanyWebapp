import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";

export default function Aboutme() {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.ABOUT_ME);
  }, []);

  return <div>Aboutme</div>;
}
