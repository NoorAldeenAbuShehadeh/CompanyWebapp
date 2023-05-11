import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useTheme } from "react-jss";
import Style from "./Style";
import { Link } from "react-router-dom";
import { routes,routeNames } from "../../Utils/Utils";
const Navigation = ({ activeTab }) => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.navigationContainer}>
      <Container className={classes.container}>
        <div className={classes.LogoCont}>
          <img src="companyLogo.png"></img>
          <Navbar.Brand className={classes.Logo}> CodeScape</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.burgerButton}/>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className={classes.NavLinks}>
          {routes.map((route, idx) => {
              return (
                <Link
                  eventKey={idx + 1}
                  to={route.path}
                  className={
                    `${activeTab === route.title
                      ? classes.activeLink
                      : classes.inActiveLink} 
                      ${routeNames.CONTACT_Us===route.title?classes.contactUS:""}`
                  }
                >
                  {route.title}
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;


/*

<Nav.Link eventKey={1} href="#" className={active==='home'?classes.activeLink:classes.inActiveLink}
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
*/