import { lazy } from "react"
import {
  Route,Outlet
} from "react-router-dom"
import Home from "../Pages/Home/Home"
import RegisterAndLogin from "../Pages/RegisterAndLogin/RegisterAndLogin"
import IsAdmin from "../Components/Authorization/IsAdmin";
import IsEmployee from "../Components/Authorization/IsEmployee";
import ServiceForm from '../Pages/Services/subComponent/ServicesForm'
import NewsForm from "../Pages/News/SubComponent/NewsForm";
import NewsContainer from "../Pages/News/NewsContainer";
import AboutUsContainer from '../Pages/AboutUs/AboutUsContainer'
import EmployeeForm from "../Pages/AboutUs/SubComponents/EmployeeForm";
const AboutUs = lazy(() => import("../Pages/AboutUs/SubComponents/AboutUs"))
const Services = lazy(() => import("../Pages/Services/subComponent/Services"))
const News = lazy(() => import("../Pages/News/SubComponent/News"))
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"))
const ServicesContainer = lazy(()=> import('../Pages/Services/ServicesContainer'))
export const routeNames = {
  HOME: "Home",
  ABOUT_Us: "About Us",
  SERVICES: "Services",
  NEWS: "News",
  RegisterAndLogin: "Sign in",
  CONTACT_Us: "Contact Us"
}

export const routes = [
  {
    path: "/",
    title: routeNames.HOME,
    component: <Home />,
  },
  {
    path: "/AboutUs",
    title: routeNames.ABOUT_Us,
    component: <AboutUsContainer />,
        subRoutes:[
      {
        index: true,
        component: <AboutUs />,
      },
      {
        title: "addEmployee",
        path: "addEmployee",
        component: <IsAdmin moveTo={'AboutUs'} > <EmployeeForm /> </IsAdmin>,
      },
      {
        title:"updateEmployee",
        path:"updateEmployee/:id",
        component: <IsAdmin moveTo={'AboutUs'} > <EmployeeForm /> </IsAdmin>,
      }
    ]
  },
  {
    path: "/Services",
    title: routeNames.SERVICES,
    component: <ServicesContainer/>,
    subRoutes:[
      {
        index: true,
        component: <Services />,
      },
      {
        title: "add",
        path: "add",
        component: <IsAdmin moveTo={'Services'} > <ServiceForm /> </IsAdmin>,
      },
      {
        title:"update",
        path:"update/:id",
        component: <IsAdmin moveTo={'Services'} > <ServiceForm /> </IsAdmin>,
      }
    ]
  },
  {
    path: "/News",
    title: routeNames.NEWS,
    component: <NewsContainer />,
    subRoutes:[
      {
        index: true,
        component: <News />,
      },
      {
        title: "add",
        path: "add",
        component: <IsEmployee moveTo={'News'} > <NewsForm /> </IsEmployee>,
      },
      {
        title:"update",
        path:"update/:id",
        component: <IsEmployee moveTo={'News'} > <NewsForm /> </IsEmployee>,
      }
    ]
  },
  {
    path: "/RegisterAndLogin",
    title: routeNames.RegisterAndLogin,
    component: <RegisterAndLogin />,
  },
  {
    path: "/ContactUs",
    title: routeNames.CONTACT_Us,
    component: <ContactUs />,
  },
]

export const generateRoutes = (routes) => {
  let _routes = routes.map((route, idx) => {
    if (route.subRoutes) {
      return (
        <Route key={idx} path={route.path} element={route.component}>
          {generateRoutes(route.subRoutes)}
        </Route>
      );
    } else {
      if (route.index)
        return <Route key={idx} index element={route.component} />;
      else
        return <Route key={idx} path={route.path} element={route.component} />;
    }
  });

  return _routes;
};