import React from 'react'
import { Container } from 'react-bootstrap'
import { useTheme } from "react-jss";
import { BsArrowRight } from 'react-icons/bs'
import Style from "./Style";
const Post = ({img, date, title, description}) => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container fluid className={`d-flex flex-column ${classes.postContainer}`}>
        <img src={img} alt='' className={classes.imgContainer}></img>
        <span className={classes.date}>{date}</span>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <a className={classes.readMore} href='#'>Read more <BsArrowRight size={25}/> </a>
    </Container>
  )
}

export default Post