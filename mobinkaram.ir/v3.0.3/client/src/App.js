import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
// it should use React Router Dom


import Header from "./components/Leftside/Header/Header";
import Home from "./components/Rightside/Content/Home/Home";
import Footer from "./components/Rightside/Content/Footer/Footer";
import Aboutme from "./components/Rightside/Content/Aboutme/Aboutme";
import WhatIDo from "./components/Rightside/Content/WhatIDo/WhatIDo";
import Resume from "./components/Rightside/Content/Resume/Resume";
import Portfolio from "./components/Rightside/Content/Portfolio/Portfolio";
import Testimonial from "./components/Rightside/Content/Testimonial/Testimonial";
import Contact from "./components/Rightside/Content/Contact/Contact";
import "./dist/main.css";

const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-start-1 col-end-2">
          <Header />
        </div>
        <div className="col-start-2 col-end-6">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/whatido",
        element: <WhatIDo />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/testimoniaol",
        element: <Testimonial />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/adminlogin",
  //   element: <Login />,
  // },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
]);

const App = () => {
  return (
    <div className="app">
      <div className="Container">
        <RouterProvider basename="/" router={router} />
      </div>
    </div>
  );
};

export default App;
