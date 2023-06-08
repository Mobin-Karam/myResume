import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <Link className="Link Logo" to={"/"}>
          <h1 className="LogoText">Mobin.dev</h1>
        </Link>
        <div className="Navbar">
          <Link className="Items Link" to={"/"}>
            <span className="item">Home</span>
          </Link>
          <Link to={"/work"}>
            <option value="work">Work</option>
          </Link>
          <Link className="Items Link" to={"/about"}>
            <span className="item">About</span>
          </Link>
          <Link className="Items Link" to={"/projects"}>
            <span className="item">Projects</span>
          </Link>
          <Link className="Items Link" to={"/services"}>
            <span className="item">Services</span>
          </Link>
        </div>
        <Link className="Link">
          <button className="Btn">Let's chat</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
