import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
// it should use React Router Dom
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import Article from "./pages/Article";
import "./dist/main.css";
import Projectdemo from "./pages/Projectdemo";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
        path: "/article",
        element: <Article />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/projectdemo",
        element: <Projectdemo />,
      },
    ],
  },
  {
    path: "/adminlogin",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
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
