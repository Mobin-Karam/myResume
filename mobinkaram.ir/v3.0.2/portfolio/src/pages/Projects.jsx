import React from "react";
import { projects } from "../components/Data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="workNav">
        <Link to={"/"}>
          <button className="Btn">Home</button>
        </Link>
        <div className="">
          <label htmlFor="Type" className="text-lg font-bold">
            Type of Projects:
          </label>
          <select id="Type" className="Dropdown">
            {projects.map((project) => (
              <option className="work">{project.type}</option>
            ))}
          </select>
        </div>
      </div>
      <section className="Home">
        <section className="Center">
          <section className="works">
            {projects.map((project) => (
              <div className="project" key={project.id}>
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
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag1}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag2}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag3}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag4}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag5}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag6}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag7}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag8}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag9}
                    </span>
                    <span className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {project.tag10}
                    </span>
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
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
