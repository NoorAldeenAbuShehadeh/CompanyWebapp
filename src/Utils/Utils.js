import { lazy } from "react";
import Home from "../Pages/Home/Home";

const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));
const Services = lazy(() => import("../Pages/Services/Services"));
const News = lazy(() => import("../Pages/News/News"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));
export const routeNames = {
  HOME: "Home",
  ABOUT_Us: "About Us",
  SERVICES: "Services",
  NEWS: "News",
  CONTACT_Us: "Contact Us"
};

export const routes = [
  {
    path: "/",
    title: routeNames.HOME,
    component: <Home />,
  },
  {
    path: "/AboutUs",
    title: routeNames.ABOUT_Us,
    component: <AboutUs />,
  },
  {
    path: "/Services",
    title: routeNames.SERVICES,
    component: <Services />,
  },
  {
    path: "/News",
    title: routeNames.NEWS,
    component: <News />,
  },
  {
    path: "/ContactUs",
    title: routeNames.CONTACT_Us,
    component: <ContactUs />,
  },
];