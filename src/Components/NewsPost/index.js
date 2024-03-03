import React, {useEffect, useState} from "react";
import { Container, Button } from "react-bootstrap";
import { useTheme } from "react-jss";
import PostTitle from "../PostTitle";
import PostDescription from "../PostDescription";
import Style from "./Style";
import RetrieveData from "../../Utils/Firebase/RetrieveData";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../Utils/userContext";
const NewsPost = ({
  maxWidth,
  flexDirection,
  image,
  title,
  description,
  dateOfPublish,
  publisherEmail,
  index
}) => {
  const theme = useTheme();
  const classes = Style({ theme, maxWidth, flexDirection });
  const [publisher,setPublisher] = useState(null)
  const navigate = useNavigate();
  const [activeUser] = useUserContext();
  useEffect(()=>{
      RetrieveData('Users',"email",publisherEmail).then((response)=>{
      setPublisher(response[0])
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
        {    
          activeUser?.email===publisherEmail &&
          <Container className="d-flex align-items-center justify-content-end"><Button variant="primary" onClick={()=>navigate(`update/${index}`)}>update</Button></Container>
        }  
      </Container>
    </Container>
  );
};

export default NewsPost;
