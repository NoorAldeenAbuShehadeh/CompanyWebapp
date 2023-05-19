import React from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "react-jss";
import PostTitle from "../PostTitle";
import PostDescription from "../PostDescription";
import Style from "./Style";
const NewsPost = ({
  maxWidth,
  flexDirection,
  img,
  title,
  description,
  publisherImg,
  publisherName,
  dateOfPublish,
}) => {
  const theme = useTheme();
  const classes = Style({ theme, maxWidth, flexDirection });
  return (
    <Container className={classes.postContainer}>
      <img src={img} alt="" className={classes.postImage}></img>
      <Container className={classes.postContent}>
        <PostTitle title={title} />
        <PostDescription description={description} />
        <Container className={classes.publisherContainer}>
          <img src={publisherImg} alt="" className={classes.publisherImg}></img>
          <Container fluid>
            <h5 className={classes.publisherName}>{publisherName}</h5>
            <span className={classes.date}>{dateOfPublish}</span>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default NewsPost;
