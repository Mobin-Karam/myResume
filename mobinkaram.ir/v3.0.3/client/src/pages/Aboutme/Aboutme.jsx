import React from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col flex-nowrap py-40px bg-slate-300 ">
        <div className="relative w-full flex items-center justify-center flex-row flex-nowrap">
          <span className="text-9xl font-bold text-gray-900/5 font-popp">
            ABOUT ME
          </span>
          <span className="border-b-2 text-4xl font-popp font-semibold border-sky-500 absolute top-100">
            Know Me More
          </span>
        </div>
        <div className="w-full flex items-center justify-center flex-col flex-nowrap mt-40px">
          <Link
            to={"https://mobinkaram.ir/download/mobinkaram-resume.pdf"}
            target="_blank"
            className="transition duration-300 cursor-pointer rounded-full px-30px hover:shadow-lg hover:shadow-slate-500/50 p-10px bg-sky-400 text-white"
          >
            Download CV
          </Link>
        </div>
        <div className="w-full flex items-center justify-between flex-row flex-nowrap p-50px">
          <div className="h-full flex items-start justify-center flex-col flex-nowrap">
            <div className="font-popp flex items-start justify-center flex-col flex-nowrap mb-20px">
              <h2 className="text-3xl font-semibold">
                I'm <span className="text-sky-500 font-popp">Mobin Karam</span>,
                a Full Stack Developer
              </h2>
            </div>
            <div className="">
              <p className="font-popp mb-20px">
                I help you build brand for your business at an affordable price.
              </p>
              <p className="font-popp mb-20px">
                I Love writing clean
                code, and pushing my skills to the limit. My interests include
                joining an exciting team of passionate people, personal growth,
                and making silly faces. Some people might be nervous to leave the exciting
                on-the-job learning and fulfilling teamwork dynamic behind.
                Personally, I'm excited to join the boring, simple, and
                rarely-evolving world of tech. Other than coding,I Love baking cookies, and
                making people laugh.
              </p>
              <p className="font-popp">
                Delivering work within time and budget which meets client’s
                requirements is our moto. 
              </p>
            </div>
          </div>

          <div className="w-900px ml-20px flex items-start justify-center flex-col flex-nowrap">
            <div className="w-full font-popp mb-10px  border-b-gray-600/20 border-2 border-t-0 border-r-0 border-l-0 p-6px">
              <span className="font-semibold">Name:</span> Mobin Karam
            </div>
            <div className="w-full font-popp mb-10px  border-b-gray-600/20 border-2 border-t-0 border-r-0 border-l-0 p-6px">
              <span className="font-semibold">Email:</span>
              <Link
                className="text-sky-500"
                to={"mailto:mohammadmobinkaram@gmail.com"}
              >
                {" "}
                mohammadmobinkaram@gmail.com
              </Link>
            </div>
            <div className="w-full font-popp mb-10px  border-b-gray-600/20 border-2 border-t-0 border-r-0 border-l-0 p-6px">
              <span className="font-semibold">Age:</span> 21
            </div>
            <div className="w-full font-popp mb-10px  border-b-gray-600/20 border-2 border-t-0 border-r-0 border-l-0 p-6px">
              <span className="font-semibold">From:</span> IRAN, Kermanshah,
              Paveh
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-evenly flex-row flex-nowrap text-gray-500 font-semibold">
          <div className="flex items-center font-popp justify-center flex-col flex-nowrap">
            <div className="text-5xl ">1+</div>
            <div className="">Years Experiance</div>
          </div>
          <div className="border border-gray-400 h-120px"></div>
          <div className="flex items-center font-popp justify-center flex-col flex-nowrap">
            <div className="text-5xl">0+</div>
            <div className="">Happy Clients</div>
          </div>
          <div className="border border-gray-400 h-120px"></div>
          <div className="flex items-center font-popp justify-center flex-col flex-nowrap">
            <div className="text-5xl">3+</div>
            <div className="">Projects Done</div>
          </div>
          <div className="border border-gray-400 h-120px"></div>
          <div className="flex items-center font-popp justify-center flex-col flex-nowrap">
            <div className="text-5xl">0</div>
            <div className="">Get Awards</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
