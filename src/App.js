import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./Utils/Utils";
import HomeLayout from "./Layout/PageLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<HomeLayout />} errorElement={<>Not Found</>}>
        {routes.map((route, idx) => (
          <Route path={route.path} key={idx} element={route.component} />
        ))}
      </Route>
    )
  );

  return (
    <Suspense fallback={<>Loading</>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;