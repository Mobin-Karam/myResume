import { Input } from "postcss";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>AdminLogin</title>
      </Helmet>
      <div className="w-full h-screen bg-blue-950 flex items-center justify-center flex-col flex-nowrap">
        <div className="text-white mb-20px text-xl">
          <Link to={"/"}>
            <button className="w-full px-80px text-white border-b-4 border-transparent hover:border-b-4 hover:border-white hover:text-white transition-all  duration-200">
              Home
            </button>
          </Link>
        </div>
        <h2 className="text-white mb-20px text-2xl">Admin Login</h2>
        <form action="" className="border p-20px">
          <div className="flex items-start justify-center flex-col flex-nowrap mb-10px">
            <label htmlFor="username" className="text-white mb-10px">
              Username :
            </label>
            <input
              id="username"
              type="text"
              className="bg-slate-200 p-4px text-xl"
            />
          </div>
          <div className="flex items-start justify-center flex-col flex-nowrap mb-10px">
            <label htmlFor="username" className="text-white mb-10px">
              Password :
            </label>
            <input
              id="password"
              type="password"
              className="bg-slate-200 p-4px text-xl"
            />
          </div>
          <div className="flex items-center justify-center flex-col flex-nowrap mt-30px">
            <button className="w-full text-2xl p-4px font-bold bg-white hover:bg-black hover:text-white transition-all  duration-200">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
