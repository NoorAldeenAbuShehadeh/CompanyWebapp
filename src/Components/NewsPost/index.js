import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "react-jss";
import PostTitle from "../PostTitle";
import PostDescription from "../PostDescription";
import Style from "./Style";
import RetrieveData from "../../Utils/Firebase/RetrieveData";
const NewsPost = ({
  maxWidth,
  flexDirection,
  image,
  title,
  description,
  dateOfPublish,
  publisherEmail,
}) => {
  const theme = useTheme();
  const classes = Style({ theme, maxWidth, flexDirection });
  const [publisher,setPublisher] = useState(null)
  useEffect(()=>{
      RetrieveData('Users',"email",publisherEmail).then((response)=>{
      setPublisher(response[0])
      console.log(response[0])
    })
  },[])
  return (
    publisher&&
    <Container className={classes.postContainer}>
      <img src={image} alt="" className={classes.postImage}></img>
      <Container className={classes.postContent}>
        <PostTitle title={title} />
        <PostDescription description={description} />
        <Container className={classes.publisherContainer}>
          <img src={publisher.image} alt="" className={classes.publisherImg}></img>
          <Container fluid>
            <h5 className={classes.publisherName}>{publisher.name}</h5>
            <span className={classes.date}>{dateOfPublish}</span>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default NewsPost;
