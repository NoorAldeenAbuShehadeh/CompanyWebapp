import React from 'react'
import { useTheme } from "react-jss"
import Style from "../Style"
const DivCircle = ({color, Logo}) => {
    const theme = useTheme()
    const classes = Style({ theme })
  return (
    <div className={classes.circleDiv} style={{backgroundColor:color}}>
        <Logo color='white' size='20'/>
    </div>
  )
}

export default DivCircle