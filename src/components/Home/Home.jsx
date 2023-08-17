import React from 'react';
import heroImg from "../../../src/assets/selfie.jpg"

const Home = () => {
  return (
    <div name="home" className="max-w-max w-full h-screen flex flex-col md:flex-row pt-20 bg-backgroundColor items-center">
      <div className="md:w-2/5 md:order-1 m-10 md:ml-20">
        {/* Image */}
        <img
          src={heroImg}
          alt="Hero Image"
          className="h-auto object-contain rounded-full"
        />
      </div>
      <div className="md:w-3/5 md:order-2 p-10 text-right md:mr-20">
        {/* Text */}
        <p>Hello!  It looks like you found</p>
        <h1 className="text-5xl font-bold mb-4 text-eggplant">Peter Geipel</h1>
        <p className="text-lg max-w-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat quaerat vitae cumque. Qui culpa accusantium, tenetur libero expedita consectetur delectus ullam animi velit soluta modi dolorem placeat pariatur sed!</p>
        <div className='flex justify-end'>
          <a href="https://docs.google.com/document/d/16qUIiGuB5LYJ0k_D1SliAmIoG_RD9PJJanROTvvj-Hs/edit?usp=share_link">
            <button
              className='border-2 border-black rounded-full px-5 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500'>Resume<i className="ri-file-paper-2-line"></i></button>
          </a>
      </div>
      <div className='flex justify-end'>
          <a href="https://github.com/pwgeipel">
            <button
              className='border-2 border-black rounded-full px-4 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500'><i className="ri-github-line size={30}"></i></button>
          </a>
      </div>
      {/* <div className='group flex justify-end'>
          <a href="https://docs.google.com/document/d/16qUIiGuB5LYJ0k_D1SliAmIoG_RD9PJJanROTvvj-Hs/edit?usp=share_link">
            <button
              className='border-2 border-black rounded-full px-5 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500'><span className='transition duration-300 hidden group-hover:contents text-eggplant'>Resume</span><i className="ri-file-paper-2-line"></i></button>
          </a>
      </div> */}
      </div>
      
    </div>




  )
}

export default Home