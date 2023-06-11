import React from "react";

const Aboutme = () => {
  return (
    <>
      <div className="w-full h-screen py-50px bg-slate-300 ">
        <div className="relative w-full flex items-center justify-center flex-row flex-nowrap">
          <span className="text-9xl font-bold text-gray-900/5 font-popp">
            ABOUT ME
          </span>
          <span className="border-b-2 text-4xl font-popp font-semibold border-sky-500 absolute top-100">
            Know Me More
          </span>
        </div>
        <div className="w-full flex items-center justify-center flex-col flex-nowrap">
          <div className="flex items-center justify-center flex-row flex-nowrap">
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
