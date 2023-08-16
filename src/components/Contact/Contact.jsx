import React from 'react'

const Contact = () => {
  return (
    <section name="contact" className= 'w-full h-screen bg-backgroundColor flex justify-center items-center p-3'>
        <form method='POST' action="https://getform.io/f/a11cd75e-ca17-4952-8991-b3dad0310951" className='flex flex-col max-w-[700px] w-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-black'>Contact</p>
                <p>Please fill out the form below to contact me!</p>
            </div>
            <input className='p-4 my-4' type="text" placeholder='Name' name="name" />
            <input className='p-4 my-4' type="email" placeholder='Email' name='email' />
            <textarea className='p-4 my-4' placeholder='Message' name="essage" rows="10"></textarea>
            <button
        className='border-2 border-black px-5 py-3 my-3 flex items-center gap-2 hover:bg-headerColor hover:text-white mx-auto'>Get In Touch</button>
        </form>
    </section>
  )
}

export default Contact