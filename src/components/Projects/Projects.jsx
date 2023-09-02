import React from 'react'
import { projects } from "../../data/data.js"


const Projects = () => {

    // const projects = data;

  return (
    <section name="projects" className= 'w-full md:h-screen bg-backgroundColor'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-linkColor text-eggplant'>Projects</p>
                <p className="pt-4">Some examples of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* <div className="flex flex-wrap -m-4"> */}
                {/* {project.map((item, index) => (
                 
                <div
                    key={index}
                    style={{backgroundImage: `url(${item.image})`}}
                    className='container flex justify-center text-center items-center mx-auto content-div'>

                    </div> */}
                {projects.map((project) => (
                    <a href={project.github}
                    key={project.image}
                    className="group container flex justify-center text-center items-center mx-auto content-div">
                        <div className='flex relative'>
                            <img src={project.image} alt="gallery"
                            className='absolute inset-0 w-full h-full object-cover object-center'/>
                            {/* Hover effect */}
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="text-sm font-medium text-green-400 mb-1">
                                {project.subtitle}
                                </h2>
                                <h1 className="text-lg font-medium text-white mb-3">
                                {project.title}
                                </h1>
                </div>
                        </div>
                    </a>
                ))}    

                    
                {/* ))} */}

            </div>

            {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <div style={{backgroundImage: 'url(${Shroomies})'}} className='group shadow-lg shadow-black container flex justify-center items-center mx-auto'>

                </div>
            </div> */}
        </div>

    </section>
  )
}

export default Projects