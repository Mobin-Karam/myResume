import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-500 flex items-center justify-evenly flex-col flex-nowrap">
        <div className=" flex items-center justify-center flex-col flex-nowrap">
          <div className=" flex items-center justify-evenly flex-col flex-nowrap">
            <span className="text-white font-popp text-3xl font-medium mb-40px">
              Welcome
            </span>
            <span className="text-white font-popp text-6xl font-semibold">
              I'm Full Stack Developer.
            </span>
            <span className="text-white font-popp text-xl font-thin mt-40px">
              bases in IRAN , Kermanshah, Paveh.
            </span>
            <span className="">

            </span>
            <Link
              to={"/contact"}
              className="text-sky-500 border-sky-500 p-20px border-2 bg-sky-900/20 px-40px hover:bg-sky-500 hover:text-white font-bold mt-50px rounded-full transition-all duration-400"
            >
              <button className="">Hire Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
