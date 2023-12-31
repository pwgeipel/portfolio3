import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4   bg-gradient-to-t from-backgroundColor from-0% to-headerColor to-35% text-linkColor z-10">
      <div>
        <Link smooth to="home">
          <span className="text-2xl cursor-pointer text-linkColor">
            Peter Geipel
          </span>
        </Link>
      </div>
      <ul className="text-base hidden md:flex">
        <Link smooth to="home">
          <li className="cursor-pointer text-linkColor transition duration-300 ease-in-out hover:scale-110">
            Home
          </li>
        </Link>
        <Link smooth to="about">
          <li className="cursor-pointer text-linkColor transition duration-300 ease-in-out hover:scale-110">
            About
          </li>
        </Link>
        <Link smooth to="skills">
          <li
            href="skills"
            className="cursor-pointer text-linkColor transition duration-300 ease-in-out hover:scale-110"
          >
            Skills
          </li>
        </Link>
        <Link smooth to="projects">
          <li className="cursor-pointer text-linkColor transition duration-300 ease-in-out hover:scale-110">
            Projects
          </li>
        </Link>
        <Link smooth to="contact">
          <li className="cursor-pointer text-linkColor transition duration-300 ease-in-out hover:scale-110">
            Contact
          </li>
        </Link>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        <i class={!nav ? "ri-menu-line" : "ri-close-line"}></i>
      </div>
      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-headerColor flex flex-col justify-center items-center"
        }
      >
        <Link onClick={handleClick} to="home">
          <li className="py-5 text-3xl cursor-pointer">Home</li>
        </Link>
        <Link onClick={handleClick} to="about">
          <li className="py-5 text-3xl cursor-pointer">About</li>
        </Link>
        <Link onClick={handleClick} to="skills">
          <li className="py-5 text-3xl cursor-pointer">Skills</li>
        </Link>
        <Link onClick={handleClick} to="projects">
          <li onClick={handleClick} className="py-5 text-3xl cursor-pointer">
            Projects
          </li>
        </Link>
        <Link onClick={handleClick} to="contact">
          <li className="py-5 text-3xl cursor-pointer">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
