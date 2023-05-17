import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
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
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
      <Container fluid>
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <Carousel.Item>
              <Post {...data}></Post>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default HomeNews;
