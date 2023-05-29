import React, { useEffect, useState } from "react"
import { useOutletContext, Outlet } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import { NewsContext } from "./Utils"

const NewsContainer = () => {
    const setActiveTab = useOutletContext()
    useEffect(() => {
          setActiveTab(routeNames.NEWS)
      }, [])
    const [news,setNews] = useState();
  return (
    <NewsContext.Provider value={[news,setNews]}>
        <Outlet/>
    </NewsContext.Provider>
  )
}

export default NewsContainer