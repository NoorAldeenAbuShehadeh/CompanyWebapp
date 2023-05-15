import { Suspense } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { routes } from "./Utils/Utils"

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
        {routes.map((route, idx) => (
          <Route path={route.path} key={idx} element={route.component} />
        ))}
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
