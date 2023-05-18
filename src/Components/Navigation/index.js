import { Container, Nav, Navbar } from "react-bootstrap"
import { useTheme } from "react-jss"
import Style from "./Style"
import { Link } from "react-router-dom"
import { routes,routeNames } from "../../Utils/Utils"
const Navigation = ({ activeTab }) => {
  const theme = useTheme()
  const classes = Style({ theme })
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.navigationContainer}>
      <Container fluid>
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
                  key={idx}
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
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
