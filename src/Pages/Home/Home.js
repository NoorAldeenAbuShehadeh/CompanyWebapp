import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";

export default function Home() {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.HOME);
  }, []);

  return <div>Home</div>;
}
