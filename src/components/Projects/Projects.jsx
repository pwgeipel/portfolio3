import React from 'react'
import { data } from "../../data/data.js"


const Projects = () => {

    const project = data;

  return (
    <section name="projects" className= 'w-full md:h-screen bg-backgroundColor'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-linkColor text-eggplant'>Projects</p>
                <p>Some examples of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>

                {project.map((item, index) => (
                 
                <div
                    key={index}
                    style={{backgroundImage: `url(${item.image})`}}
                    className='container flex justify-center text-center items-center mx-auto'>

                    </div>
                ))}

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