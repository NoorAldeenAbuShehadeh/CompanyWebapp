import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { useTheme } from "react-jss"; 
import Post from "./Post";
import mainStyle from "./Style";
import { Link } from "react-router-dom"
import { routes,routeNames } from "../../Utils/Utils"
import { Data } from './Utils'
const HomeNews = () => {
  const theme = useTheme();
  const classes = mainStyle({ theme });
  const ViewAllPath = routes.filter((item)=>item.title===routeNames.NEWS)

  const settings = {
    dots: true,
    dotsClass: 'custom-slick-dots',
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <Slider {...settings}>
          {Data.map((item, index) => (
            <Col key={index} >
              <Post {...item} ></Post>
            </Col>
          ))}
        </Slider>
          </Row>
      </Container>
    </>
  );
};

export default HomeNews;
