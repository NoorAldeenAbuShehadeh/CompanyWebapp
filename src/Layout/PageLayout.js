import React, { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/index"
import Header from "../Components/Header"
import { routeNames } from "../Utils/Utils"
import { userContext } from "../Utils/userContext.js"
import { useCookies } from 'react-cookie' 
function PageLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME)
  const [loggedInUser,setLoggedInUser]=useState(null)
  const [cookies, setCookies] = useCookies()
  useEffect(()=>{
    if(cookies?.UserToken){
      setLoggedInUser({email:cookies.UserEmail, token:cookies.UserToken, role:cookies.role})
    }
  },[])
  return (
    <div>
      <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Header activeTab={activeTab} />
          <Outlet context={setActiveTab} />
        <Footer />
      </userContext.Provider>

    </div>
    
  )
}

export default PageLayout