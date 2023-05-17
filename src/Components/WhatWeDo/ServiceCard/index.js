import React from 'react'
import { Alert, Container } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "../Style";
const ServiceCard = ({icon, color, title, description}) => {
    const theme = useTheme();
    const classes = Style({ theme,color });
  return (
    <Container fluid className={`d-flex flex-column justify-content-center align-items-center ${classes.container}`}>
      <Alert className={`d-flex justify-content-center align-items-center ${classes.iconContainer}`}>
        <img src={icon} alt=''></img>
      </Alert>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </Container>
  )
}

export default ServiceCard