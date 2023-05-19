import React from "react";
import { BsSearch } from "react-icons/bs";
import { Container, InputGroup, Form } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "../Style";
const HeroSection = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Container className="d-flex align-items-center justify-content-center flex-wrap">
      <img src="images/bell_2 1.png" alt=""></img>
      <Container
        className={`${classes.Container} d-flex flex-column align-items-center`}
      >
        <h2 className={classes.title}>
          Latest news <span>Updates</span>
        </h2>
        <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing .
        </p>
        <InputGroup className={`mb-2 ${classes.InputGroup}`}>
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            id="inlineFormInputGroup"
            placeholder="Username"
            className={classes.searchInput}
          />
        </InputGroup>
      </Container>
      <img src="images/lightbulb 1.png" alt=""></img>
    </Container>
  );
};

export default HeroSection;
