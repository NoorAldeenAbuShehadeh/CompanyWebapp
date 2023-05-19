import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "react-jss"; 
import Post from "./Post";
import mainStyle from "./Style";
import { Link } from "react-router-dom"
import { routes,routeNames } from "../../Utils/Utils"
import { Data } from './Utils'
import Carousel from "../Slider/Carousel";
const HomeNews = () => {
  const theme = useTheme();
  const classes = mainStyle({ theme });
  const ViewAllPath = routes.filter((item)=>item.title===routeNames.NEWS)

  
  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className={classes.mainTitle}>Our Latest News</h2>
        <p className={classes.generalDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </p>
        <Link to={ViewAllPath[0].path} className={classes.viewAll}>View All</Link>
      </Container>
      <Container fluid style={{paddingBottom:'20px'}}>
      <Row>
        <Carousel>
          {Data.map((item, index) => (
            <Col key={index} >
              <Post {...item} ></Post>
            </Col>
          ))}
          </Carousel>
      </Row>
      </Container>
    </>
  );
};

export default HomeNews;
