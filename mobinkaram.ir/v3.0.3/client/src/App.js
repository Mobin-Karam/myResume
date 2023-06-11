import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
// it should use React Router Dom


import Header from "./components/Leftside/Header/Header";
import Home from "./components/Rightside/Content/Home/Home";
import Aboutme from "./components/Rightside/Content/Aboutme/Aboutme";
import WhatIDo from "./components/Rightside/Content/WhatIDo/WhatIDo";
import Resume from "./components/Rightside/Content/Resume/Resume";
import Portfolio from "./components/Rightside/Content/Portfolio/Portfolio";
import Testimonial from "./components/Rightside/Content/Testimonial/Testimonial";
import Contact from "./components/Rightside/Content/Contact/Contact";
// import "./dist/main.css";

const Layout = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center lg:bg-slate-400 transition-all duration-600">
        <div className="lg:grid lg:grid-cols-5 flex flex-col-reverse w-full transition-all duration-600">
          <div className="lg:col-start-1 lg:col-end-2 ">
            <Header />
          </div>
          <div className="lg:col-start-2 lg:col-end-6 ">
            <Outlet />
          </div>
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
        path: "/testimonial",
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
