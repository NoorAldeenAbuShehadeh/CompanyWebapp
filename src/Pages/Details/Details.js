import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"

export default function Details() {
  const setActiveTab = useOutletContext()

  useEffect(() => {
    setActiveTab(routeNames.DETAILS)
  }, [])

  return <div>Details</div>
}
