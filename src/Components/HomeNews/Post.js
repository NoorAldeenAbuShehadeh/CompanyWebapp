import React from 'react'
import { Container } from 'react-bootstrap'
import { useTheme } from "react-jss";
import { BsArrowRight } from 'react-icons/bs'
import Style from "./Style";
const Post = ({image, dateOfPublish, title, description}) => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container fluid className={`${classes.postContainer}`}>
        <img src={image} alt='' className={classes.imgContainer}></img>
        <span className={classes.date}>{dateOfPublish}</span>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <a className={classes.readMore} href='#'>Read more <BsArrowRight size={25}/> </a>
    </Container>
  )
}

export default Post