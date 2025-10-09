import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import AppDetails from "../Components/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // Component: RootLayout,
    hydrateFallbackElement: <p>Loading....</p>,
    errorElement: <ErrorPage />,

    children: [
      
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/apps",
        element: <Apps />,
      },

      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails/>,
      },

    ],
  },
]);

export default router;
