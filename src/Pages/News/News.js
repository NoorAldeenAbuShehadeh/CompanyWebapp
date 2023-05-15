import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"

const News = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.NEWS)
  }, [])

  return (
    <div>News</div>
  )
}

export default News