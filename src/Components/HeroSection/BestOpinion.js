import React from "react";
import { useTheme } from "react-jss";
import Style from "./Style";
import { Alert } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
const BestOpinion = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Alert variant="secondary" className={classes.bestOpinion}>
      <img src="John.png"></img>
      <label className={classes.PosterName}>John rikey</label>
      <br></br>
      <BsFillStarFill color="yellow" />
      <BsFillStarFill color="yellow" />
      <BsFillStarFill color="yellow" />
      <BsFillStarFill color="yellow" />
      <BsFillStarFill color="yellow" />{" "}
      <label className={classes.opinionDescription}>5.0</label>
      <br></br>
      <h4 className={classes.opinionTitle}>Lorem Ipsum is simply dummy</h4>
      <p className={classes.opinionDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </Alert>
  );
};

export default BestOpinion;
