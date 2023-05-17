import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { useTheme } from "react-jss"; 
import Post from "./Post";
import mainStyle from "./Style";
import { Link } from "react-router-dom"
import { routes,routeNames } from "../../Utils/Utils"
const HomeNews = () => {
  const data = {
    img: "images/News1.jpg",
    date: "16/5/2007",
    title: "Holoplot",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
  };
  const theme = useTheme();
  const classes = mainStyle({ theme });
  const ViewAllPath = routes.filter((item)=>item.title===routeNames.NEWS)

  const settings = {
    dots: true,
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
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item, idx) => (
              <Post {...data} key={idx}></Post>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default HomeNews;
