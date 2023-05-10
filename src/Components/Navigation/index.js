import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "./Style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Utils/Utils";

const Navigation = ({ activeTab }) => {
  const theme = useTheme();
  const classes = Style({ theme });
  // const [active, setActive] = useState("Home");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={classes.navigationContainer}
    >
      <Container>
        <div>
          <img src="companyLogo.png"></img>
          <Navbar.Brand className={classes.Logo}>
            {" "}
            CodeScape Solutions
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {routes.map((route, idx) => {
              return (
                <Link
                  eventKey={idx + 1}
                  to={route.path}
                  className={
                    activeTab === route.title
                      ? classes.activeLink
                      : classes.inActiveLink
                  }
                  style={{ color: "white", textDecoration: "none" }}
                  // onClick={() => setActive("Home")}
                >
                  {route.title}
                </Link>
              );
            })}
            {/* <Link
              eventKey={2}
              to="/AboutMe"
              className={
                active === "about" ? classes.activeLink : classes.inActiveLink
              }
              onClick={() => setActive("about")}
            >
              About Us
            </Link>
            <Link
              eventKey={3}
              to=""
              className={
                active === "services"
                  ? classes.activeLink
                  : classes.inActiveLink
              }
              onClick={() => setActive("services")}
            >
              Services
            </Link>
            <Link
              eventKey={4}
              to=""
              className={
                active === "news" ? classes.activeLink : classes.inActiveLink
              }
              onClick={() => setActive("news")}
            >
              News
            </Link>
            <Link
              eventKey={5}
              to=""
              className={
                active === "signIn" ? classes.activeLink : classes.inActiveLink
              }
              onClick={() => setActive("signIn")}
            >
              Sign In
            </Link> */}
          </Nav>
          <Button
            variant="outline-primary"
            // className={
            //   active === "contact"
            //     ? `${classes.activeLink} ${classes.Button}`
            //     : `${classes.inActiveLink} ${classes.Button}`
            // }
            // onClick={() => setActive("contact")}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
