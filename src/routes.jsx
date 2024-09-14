import { createBrowserRouter, } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Css from "./components/CSS/Css";
import Dom from "./components/DOM/Dom";
import Crossword from "./components/Crossword/Crossword";
import String from "./components/String/String";
import Forms from "./components/Forms/Forms";
import Data from "./components/Data/Data";
import Object from "./components/Object/Object";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'css',
        element: <Css />
      },
      {
        path: 'dom',
        element: <Dom />
      },
      {
        path: 'crossword',
        element: <Crossword />
      },
      {
        path: 'string',
        element: <String />
      },
      {
        path: 'forms',
        element: <Forms />
      },
      {
        path: 'data',
        element: <Data />
      },
      {
        path: 'object',
        element: <Object />
      }
    ]
  }
]);