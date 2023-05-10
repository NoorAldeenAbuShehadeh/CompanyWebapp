import { lazy } from "react";
import Home from "../Pages/Home/Home";

const Details = lazy(() => import("../Pages/Details/Details"));
const Aboutme = lazy(() => import("../Pages/AboutMe/Aboutme"));

export const routeNames = {
  HOME: "Home",
  ABOUT_ME: "About Me",
  DETAILS: "Details",
};

export const routes = [
  {
    path: "/",
    title: routeNames.HOME,
    component: <Home />,
  },
  {
    path: "/AboutMe",
    title: routeNames.ABOUT_ME,
    component: <Aboutme />,
  },
  {
    path: "/Details",
    title: routeNames.DETAILS,
    component: <Details />,
  },
];
