import React from 'react'
import { Alert } from 'react-bootstrap'
import { useTheme } from "react-jss"
import Style from './Style'
const AboutComponent = ({imgSrc, title, description, variant, onClick}) => {
  const theme = useTheme()
  const classes = Style({ theme })
  return (
    <Alert variant={variant}  
      onClick={onClick}
    className={`d-flex flex-column align-items-center ${classes.container} ${variant==="light"?classes.Selected:""}`} key={variant}>
        <img className={classes.image} src={imgSrc} alt=""/>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
    </Alert>
  )
}

export default AboutComponent