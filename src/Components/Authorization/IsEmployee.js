import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserContext } from "../../Utils/userContext"

const IsEmployee = ({children, moveTo}) => {
    const [activeUser] = useUserContext();

    return activeUser?.role==='admin' || activeUser?.role==='employee' ? children : <Navigate to={"/"+moveTo} />;
}

export default IsEmployee