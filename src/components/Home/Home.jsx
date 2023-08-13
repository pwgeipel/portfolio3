import React from 'react';
import heroImg from "../../../src/assets/selfie.jpg"

const Home = () => {
  return (
    <section id="home" className='w-full pt-40 h-screen bg-backgroundColor'>
        <div className='max-w-[1000px] mx-auto px-8 md:flex md:flex-row sm:flex-col justify-between h-full'>
            <img className="rounded-full md:basis-1/3" src={heroImg} />
            <div className='w-full md:basis-1/2 align-'>
                <h1>Hello world</h1>
                <p>My name is Peter Geipel.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos vitae, asperiores explicabo modi ab ut autem fugit ducimus expedita sunt, voluptatem delectus mollitia dolore accusamus. Laborum voluptates eius sunt?</p>
            </div>
            
        </div>
    </section>
  )
}

export default Home