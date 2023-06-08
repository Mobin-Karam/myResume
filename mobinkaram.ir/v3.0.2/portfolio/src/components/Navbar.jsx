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
          <Link to={"/article"}>
            <option value="article">Article</option>
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
          <Link className="Items Link">
            <button className="">Let's chat</button>
          </Link>
        </div>
        <Link to={"https://www.buymeacoffee.com/mohammadmk"} target="_blank">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mohammadmk&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
