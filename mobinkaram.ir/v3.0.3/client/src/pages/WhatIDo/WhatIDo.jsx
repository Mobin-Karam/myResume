import React from "react";

const WhatIDo = () => {
  return (
    <>
      <div className="w-full h-screen py-50px bg-slate-300 ">
        <div className="relative w-full flex items-center justify-center flex-row flex-nowrap">
          <span className="text-9xl font-bold text-gray-900/5 font-popp">
            SERVICES
          </span>
          <span className="border-b-2 text-4xl font-popp font-semibold border-sky-500 absolute top-100">
            What I Do
          </span>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-start-1 col-end-2 bg-slate-700 w-full flex items-center justify-center flex-row flex-nowrap">
            <div className=""></div>
          </div>
          <div className="col-start-2 col-end-6">
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
