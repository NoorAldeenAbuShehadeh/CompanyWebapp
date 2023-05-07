import { Container, Nav, Navbar, Button, Stack } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "./Style";
import { useState } from "react";
const Navigation = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  const [active,setActive] = useState('home');
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div>
          <img src="companyLogo.png"></img>
          <Navbar.Brand className={classes.Logo}> CodeScape Solutions</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link eventKey={1} href="#home" className={active==='home'?classes.activeLink:classes.inActiveLink}
            onClick={()=>setActive('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="#" className={active==='about'?classes.activeLink:classes.inActiveLink}
            onClick={()=>setActive('about')}
            >
              About Us
            </Nav.Link>
            <Nav.Link eventKey={3} href="#" className={active==='services'?classes.activeLink:classes.inActiveLink}
            onClick={()=>setActive('services')}
            >
              Services
            </Nav.Link>
            <Nav.Link eventKey={4} href="#" className={active==='news'?classes.activeLink:classes.inActiveLink}
            onClick={()=>setActive('news')}
            >
              News
            </Nav.Link>
            <Nav.Link eventKey={5} href="#" className={active==='signIn'?classes.activeLink:classes.inActiveLink}
            onClick={()=>setActive('signIn')}
            >
              Sign In
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-primary"
            className={active==='contact'?`${classes.activeLink} ${classes.Button}`:`${classes.inActiveLink} ${classes.Button}`}
            onClick={()=>setActive('contact')}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
