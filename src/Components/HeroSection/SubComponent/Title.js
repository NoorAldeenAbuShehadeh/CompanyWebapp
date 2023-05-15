import React from "react"
import { useTheme } from "react-jss"
import Style from "../Style"
const Title = () => {
  const theme = useTheme()
  const classes = Style({ theme })
  return (
    <>
      <h1 className={classes.address}>
        Advanced software, advanced research for{" "}
        <span className={classes.highlight}>SIMPLE</span> life
      </h1>
      <p className={classes.subAddress}>
        We harness the latest technologies to develop cutting-edge digital
        solutions for modern business requirements
      </p>
    </>
  )
}

export default Title
