import React from 'react'
import { Container } from 'react-bootstrap'
const Post = ({img, date, title, description}) => {
  return (
    <Container>
        <img src={img} alt=''></img>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
    </Container>
  )
}

export default Post