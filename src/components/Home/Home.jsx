import React from 'react';
import heroImg from "../../../src/assets/selfie.jpg"

const Home = () => {
  return (
    <div className="max-w-max w-full h-screen flex flex-col md:flex-row pt-20 bg-backgroundColor items-center">
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
        <h1 className="text-4xl font-bold mb-4">Peter Geipel</h1>
        <p className="text-lg max-w-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat quaerat vitae cumque. Qui culpa accusantium, tenetur libero expedita consectetur delectus ullam animi velit soluta modi dolorem placeat pariatur sed!</p>
        <div>
          <a href="https://docs.google.com/document/d/16qUIiGuB5LYJ0k_D1SliAmIoG_RD9PJJanROTvvj-Hs/edit?usp=share_link">
        <button
        className='border-2 border-black px-5 py-3 my-3 flex items-center gap-2 hover:bg-headerColor hover:text-white'>Resume<i class="ri-file-paper-2-line"></i></button>
        </a>
      </div>
      </div>
      
    </div>




    // <section name="home" className= 'w-full pt-40 h-screen flex justify-between bg-backgroundColor'>
    //     <div className='max-w-[1000px] mx-auto md:flex md:flex-row sm:flex-col justify-between h-full'>
    //         <img className="rounded-full p-5" src={heroImg} />
    //         <div className='w-full px-8 items-center'>
    //             <h1>Hello world</h1>
    //             <div className=''>
    //             <p className='items-center'>My name is Peter Geipel.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos vitae, asperiores explicabo modi ab ut autem fugit ducimus expedita sunt, voluptatem delectus mollitia dolore accusamus. Laborum voluptates eius sunt?</p>
    //             </div>
    //         </div>
            
    //     </div>
    // </section>
  )
}

export default Home