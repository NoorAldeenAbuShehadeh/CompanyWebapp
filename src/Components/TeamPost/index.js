import React from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "./Style";
const TeamPost = ({ image, jobDescription, jobPosition, name }) => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container className="d-flex flex-column align-items-center">
      <img src={image} alt="" className={classes.employeeImg}>
      </img>
      <p className={classes.jobDescription}>{jobDescription}</p>
      <h3 className={classes.details}>
        {`(${jobPosition})`}
        <span> {name}</span>
      </h3>
    </Container>
  );
};

export default TeamPost;
