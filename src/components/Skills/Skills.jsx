import React from 'react'
import HTML from '../../../src/assets/html-2.png'
import CSS from '../../../src/assets/css3.png'
import JS from '../../../src/assets/javascript.png'
import ReactIcon from '../../../src/assets/react.png'
import JQuery from '../../../src/assets/jquery.png'
import Express from '../../../src/assets/express.png'
import Mongo from '../../../src/assets/mongodb.png'
import Node from '../../../src/assets/node-js.png'

const Skills = () => {
  return (
    <section name="skills" className='w-full h-screen bg-backgroundColor'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-black'>Skills</p>
                <p className='py-3'>Here are some of the skills I am prepared to bring to your team.</p>
            </div>
            <div className='w-full grid sm:grid-cols-4 grid-cols-2 text-center py-10'>
              <div>
            <img className='w-40 mx-auto mt-3' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={JS} alt="Javascript icon" />
            <p className='my-4'>Javascript</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={ReactIcon} alt="React icon" />
            <p className='my-4'>React</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={JQuery} alt="JQuery icon" />
            <p className='my-4'>JQuery</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={Express} alt="Express icon" />
            <p className='my-4'>Express</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={Mongo} alt="MongoDB icon" />
            <p className='my-4'>MongoDB</p>
            </div>
            <div>
            <img className='w-40 mx-auto mt-3' src={Node} alt="NodeJS icon" />
            <p className='my-4'>NodeJS</p>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Skills