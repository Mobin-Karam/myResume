import React from "react";
import { projects } from "../components/Data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tags } from "../components/Tags.jsx";
import {} from "react-icons/";
import {} from "@react-icons/all-files";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Mobin Karam | Projects</title>
      </Helmet>
      <div className="workNav">
        <div className="group  mr-80px">
          <div className="flex items-center justify-center">
            <div className="text-lg font-bold  cursor-pointer">Projects </div>
            {/* < /> */}
          </div>
          <div
            id="Type"
            className="bg-slate-200 p-10px group-hover:grid gap-2 grid-cols-3 grid-rows-1 hidden absolute"
          >
            {projects.map((project) => (
              <span
                className="work p-2px border-transparent border-b-2 hover:border-b-2 hover:border-black hover:text-black cursor-pointer"
                key={project.id}
              >
                {project.type}
              </span>
            ))}
          </div>
        </div>
        <div className="group">
          <div className="text-lg font-bold  cursor-pointer">Technologies:</div>
          <div className="bg-slate-200 p-10px group-hover:grid gap-2 grid-cols-3 grid-rows-1 hidden absolute">
            {tags.map((tag) => (
              <Link
                className="work p-2px border-transparent border-b-2 hover:border-b-2 hover:border-black hover:text-black"
                key={tag.id}
                to={`/projects?${tag.tag}`}
              >
                <span className="">{tag.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <section className="Home">
        <section className="Center">
          <section className="works">
            {projects.map((project) => (
              <Link to={"/projects/projectdemo"} key={project.id}>
                <div className="project">
                  <div className="img">
                    <img src={project.img} alt="" />
                  </div>
                  <div className="content">
                    <h1 className="inline-block mb-3 text-2xl font-bold leading-5">
                      {project.title}
                    </h1>
                    <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                      {project.type}
                    </h2>
                    <p className="mb-2 text-gray-700">{project.desc} </p>
                    <div className="flex flex-wrap space-x-2 mt-5">
                      <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                        Technologies:
                      </h2>
                      {tags.map((tag) => (
                        <span
                          className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                          key={tag.id}
                        >
                          {tag.tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap space-x-2 mt-5">
                      <button className="inline-flex px-4 py-2 items-center transform font-semibold border transition duration-300 hover:scale-105 shadow hover:shadow-lg">
                        Live Demo
                      </button>
                      <button className="inline-flex bg-blue-500 hover:bg-blue-700 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-white">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
