import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Main from "../layout/Main";
import MarketPlace from "../pages/MarketPlace";

export const routes = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
    ],
  },
]);
