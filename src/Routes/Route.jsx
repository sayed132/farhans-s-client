import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import PortfolioDetail from "../Pages/Portfolio/PortfolioDetail";
import Services from "../Pages/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Test from "../Pages/Contact/test";
import Courses from "../Pages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolios",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetail />,
      },
    ],
  },
]);

export default router;
