import React from "react";
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" h-screen p-26px bg-slate-900">
        <div className="">
          <div className="w-full flex item-center justify-center flex-row flex-nowrap">
            <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className="w-180px bg-slate-400 border-slate-600 border-4 rounded-full p-10px"
              />
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap">
            <span className="font-bold text-2xl text-gray-200">Mobin karam</span>
          </div>
        </div>
        <div className="">
          <div className="">
            <Link to={"/"}>Home</Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Header;
