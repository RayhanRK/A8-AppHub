import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import AppDetails from "../Components/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // Component: RootLayout,

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
