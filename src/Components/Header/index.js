import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { useTheme } from "react-jss"
import Style from "./Style"
import { Link } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { routes,routeNames } from "../../Utils/Utils"
import { useUserContext } from '../../Utils/userContext'
const Header = ({ activeTab }) => {
  const [activeUser, setActiveUser] = useUserContext()
  const theme = useTheme()
  const classes = Style({ theme })
  const [cookies, setCookie, removeCookie] = useCookies();
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
              if(activeUser && route.title === routeNames.RegisterAndLogin){return <></>}
              return (
                <Link
                  key={idx}
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
          {activeUser &&<Button className="d-flex justify-content-start m-2" onClick={()=>{
            setActiveUser(null)
            removeCookie('UserToken')
            removeCookie('UserEmail')
            removeCookie('role')
          }
          }>Log out</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
