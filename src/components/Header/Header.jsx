import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-headerColor text-linkColor text-2xl'>
        <div>
            <span>Peter Geipel</span>
        </div>
        <div>
            <ul className='text-base'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header