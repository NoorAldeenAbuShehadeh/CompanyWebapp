import React from 'react'
import { Container, Button } from 'react-bootstrap'
import PostTitle from '../PostTitle'
import PostDescription from '../PostDescription'
import Style from "./Style";
import { useTheme } from "react-jss";
const ServiceComponent = ({index, image, title, description}) => {
    const theme = useTheme();
    const classes = Style({ theme, index});
  return (
    <Container className={`d-flex justify-content-center align-items-between ${classes.serviceContainer}`}>
        <img src={image} alt='' className={classes.imgContainer}></img>
        <Container className={`d-flex flex-column justify-content-around align-items-between ${classes.contentContainer}`}>
            <PostTitle title={(index+1)+". "+title}/>
            <PostDescription description={description}/>
            <Button variant="dark" className={classes.btn}>Read more</Button>
        </Container>
    </Container>
  )
}

export default ServiceComponent