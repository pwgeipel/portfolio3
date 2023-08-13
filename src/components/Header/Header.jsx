import React, { useState } from 'react'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-headerColor text-linkColor'>
        <div>
            <span href="#" className='text-2xl'>Peter Geipel</span>
        </div>
        <ul className='text-base hidden md:flex'>
                <li href="#" className='cursor-pointer'>Home</li>
                <li href="#" className='cursor-pointer'>About</li>
                <li href="#" className='cursor-pointer'>Skills</li>
                <li href="#" className='cursor-pointer'>Work</li>
                <li href="#" className='cursor-pointer'>Contact</li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            <i class={!nav ? "ri-menu-line" : "ri-close-line"}></i>
        </div>
        {/* Mobile Menu */}
        
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-headerColor flex flex-col justify-center items-center'}>
                <li href="#" className='py-5 text-3xl cursor-pointer'>Home</li>
                <li href="#" className='py-5 text-3xl cursor-pointer'>About</li>
                <li href="#" className='py-5 text-3xl cursor-pointer'>Skills</li>
                <li href="#" className='py-5 text-3xl cursor-pointer'>Work</li>
                <li href="#" className='py-5 text-3xl cursor-pointer'>Contact</li>
            </ul>
        
    </div>
  )
}

export default Header