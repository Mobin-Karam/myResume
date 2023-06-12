import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FaBeer, FaLinkedin, FaHome } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="lg:h-screen lg:p-26px p-10px fixed w-full bottom-0 lg:relative bg-slate-900 flex item-center justify-between lg:flex-col flex-nowrap">
        <div className="">
          <div className="w-full flex item-center justify-center flex-row flex-nowrap">
            <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className="lg:w-180px w-60px bg-slate-400 border-slate-600 border-4 rounded-full p-4px"
              />
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap">
            <span className="lg:inline-block hidden text-xl lg:text-xl lg:font-bold font-popp text-gray-200 mt-20px transition-all duration-400">
              Mobin karam
            </span>
          </div>
        </div>
        <div className="w-full flex item-center justify-center lg:flex-col flex-row flex-nowrap">
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/"}>
              <FaHome className="lg:hidden text-gray-200 hover:text-cyan-500 text-3xl" />
              <span className="hidden font-popp lg:inline-block text-gray-200 hover:text-cyan-500 text-xl">
                Home
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/aboutme"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                Aboutme
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/whatido"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                What I DO
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/resume"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                Resume
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/portfolio"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                Portfolio
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/testimonial"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                Testimonial
              </span>
            </Link>
          </div>
          <div className="w-full flex item-center justify-center flex-row flex-nowrap lg:mt-20px">
            <Link to={"/contact"}>
              <span className="text-gray-200 font-popp hover:text-cyan-500 text-xl">
                Contact
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex w-full items-center justify-evenly flex-row flex-nowrap ">
          <Link to={"https://www.buymeacoffee.com/mohammadmk"} target="_blank">
            <FaBeer className="text-white w-30px h-30px" />
          </Link>
          <Link to={"https://github.com/Mobin-Karam"} target="_blank">
            <AiFillGithub className="text-white w-30px h-30px" />
          </Link>
          <Link to={"https://www.buymeacoffee.com/mohammadmk"} target="_blank">
            <FaLinkedin className="text-white w-30px h-30px" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
