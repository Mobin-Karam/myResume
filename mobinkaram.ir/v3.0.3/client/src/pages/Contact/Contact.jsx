//Contact Component
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen py-50px bg-slate-300 font-popp">
        <div className="relative w-full flex items-center justify-center flex-row flex-nowrap pb-80px">
          <span className="text-9xl font-bold text-gray-900/5 font-popp">
            CONTACT
          </span>
          <span className="border-b-2 text-4xl font-popp font-semibold border-sky-500 absolute top-100">
            Get in Touch
          </span>
        </div>
        <div className="grid grid-cols-5 w-full">
          <div className="col-start-1 col-end-2 pl-60px">
            <div className="">
              <h2 className="font-popp text-3xl pb-10px">ADDRESS</h2>
              <div className="">
                <div className="mb-30px">
                  <p className="">
                    4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA
                    2028
                  </p>
                </div>
                <div className="">
                  <div className="">
                    <FaPhone /> 
                  </div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-end-6">
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
