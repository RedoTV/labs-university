import { createBrowserRouter, } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);