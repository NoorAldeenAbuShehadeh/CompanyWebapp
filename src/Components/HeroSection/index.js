import React from "react";
import { useTheme } from "react-jss";
import Style from "./Style";
import { Alert, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Title from "./Title";
import BestOpinion from "./BestOpinion";
import Development from "./Development";
import Facts from "./Facts";
const HeroSection = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <div className={classes.container}>
      <Title />
      <div className={classes.reviewsContainer}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Alert className={classes.GetQuot}>
            <span className={classes.GetQoutTxt}>Get a Quote</span>
            <Button variant="light">
              <BsArrowRight size={20} />
            </Button>
          </Alert>
          <Facts />
        </div>
        <BestOpinion />
        <Development />
      </div>
    </div>
  );
};

export default HeroSection;
