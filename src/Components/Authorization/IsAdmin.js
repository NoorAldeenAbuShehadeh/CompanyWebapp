import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserContext } from "../../Utils/userContext"

const IsAdmin = ({ moveTo, children }) => {
  const [activeUser] = useUserContext();

  return activeUser?.role==='admin' ? children : <Navigate to={"/"+moveTo} />;
}

export default IsAdmin