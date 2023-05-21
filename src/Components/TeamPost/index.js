import React from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "./Style";
const TeamPost = ({ img, jobDescription, Position, employeeName }) => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container className="d-flex flex-column align-items-center">
      <img src={img} alt="" className={classes.employeeImg}>
      </img>
      <p className={classes.jobDescription}>{jobDescription}</p>
      <h3 className={classes.details}>
        {`(${Position})`}
        <span> {employeeName}</span>
      </h3>
    </Container>
  );
};

export default TeamPost;
