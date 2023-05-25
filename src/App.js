import { Suspense, useEffect } from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { routes, generateRoutes } from "./Utils/Utils"
import PageLayout from "./Layout/PageLayout"
import { ThemeProvider } from "react-jss"

const theme = {
  colors: {
    primary: "#41BBEA",
    secondary: "#CECECE",
    background: "black",
    text: "white",
    darkGray: "#454545",
    lightGray: "#DBDBDB",
    alertBackground: "rgba(255, 255, 255, 0.36)",
    employeeName: "#6E00FA",
    SearchBackground: "#e9ecef"
  },
  spacing: {
    small: "10px",
    medium: "30px",
    large: "70px",
  },
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PageLayout />} errorElement={<>Not Found</>}>
        {generateRoutes(routes)}
      </Route>
    )
  )

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>Loading</>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
