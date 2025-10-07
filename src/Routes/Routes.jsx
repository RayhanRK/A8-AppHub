import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import App from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/apps",
        element: <App />,
      },

      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
