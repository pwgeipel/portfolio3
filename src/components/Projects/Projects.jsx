import React from "react";
import { projects } from "../../data/data.js";

const Projects = () => {
  // const projects = data;

  return (
    <section name="projects" className="w-full h-fit bg-backgroundColor">
      <div className="max-w-[1000px] mx-auto mt-14 p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className="text-3xl font-bold inline border-b-4 border-linkColor text-eggplant"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Projects
          </p>
          <p className="pt-4" 
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500">Some examples of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-5 gap-10">
          {projects.map((project) => (
            <div className="flex relative" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
              <img
                src={project.image}
                alt="gallery"
                className="absolute inset-0  w-full h-full object-cover object-center"
              />
              {/* Hover effect */}
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <span className="text-sm font-medium text-green-400 mb-1">
                  {project.subtitle}
                </span>
                <h1 className="text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <a href={project.github}>
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md  hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500">
                    Github
                  </button>
                </a>
                <a href={project.demo}>
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md  hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
