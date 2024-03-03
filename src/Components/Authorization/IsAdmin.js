import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Utils/userContext";
import rootPath from "../../Utils/rootPath";

const IsAdmin = ({ moveTo, children }) => {
  const [activeUser] = useUserContext();

  return activeUser?.role === "admin" ? (
    children
  ) : (
    <Navigate to={rootPath + "/" + moveTo} />
  );
};

export default IsAdmin;
