import React from "react";
import heroImg from "../../../src/assets/selfie.jpg";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Developer",
        "Coffee Enthusiast",
        "Amateur Chef",
        "Corporate Trainer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: "__",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="max-w-max w-full h-auto md:h-screen flex flex-col md:flex-row pt-20 bg-backgroundColor items-center"
    >
      <div
        className="md:w-2/5 md:order-1 px-10 py-6 sm:p-10 md:ml-20"
        data-aos="zoom-in"
        data-aos-duration="750"
      >
        {/* Image */}
        <img
          src={heroImg}
          alt="Hero"
          className="h-auto object-contain rounded-full"
        />
      </div>
      <div
        className="md:w-3/5 md:order-2 px-10 py-4 sm:py-10 text-right md:mr-20"
        data-aos="fade-left"
        data-aos-duration="750"
      >
        {/* Text */}
        <p>Hello! It looks like you found</p>
        <h1 className="text-6xl font-bold mb-4 text-eggplant">Peter Geipel</h1>
        <div>
          <span className="text-3xl" ref={el} />
        </div>

        <div className="flex justify-end">
          <a href="https://docs.google.com/document/d/16qUIiGuB5LYJ0k_D1SliAmIoG_RD9PJJanROTvvj-Hs/edit?usp=share_link">
            <button
              className="border-2 border-black rounded-full px-5 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500"
              data-aos="fade-left"
              data-aos-delay="750"
              data-aos-duration="750"
            >
              Resume<i className="ri-file-paper-2-line"></i>
            </button>
          </a>
        </div>
        <div className="flex justify-end gap-2">
          <a href="https://github.com/pwgeipel">
            <button
              className="border-2 border-black rounded-full px-4 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500"
              data-aos="fade-left"
              data-aos-delay="3000"
              data-aos-duration="750"
            >
              <i className="ri-github-line  text-xl"></i>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/peter-geipel/">
            <button
              className="border-2 border-black rounded-full px-4 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500"
              data-aos="fade-left"
              data-aos-delay="2250"
              data-aos-duration="750"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </button>
          </a>
          <a href="mailto:pwgeipel@gmail.com">
            <button
              className="border-2 border-black rounded-full px-4 py-3 my-3 flex items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant duration-500"
              data-aos="fade-left"
              data-aos-delay="1500"
              data-aos-duration="750"
            >
              <i className="ri-mail-line text-xl"></i>
            </button>
          </a>
        </div>
        {/* <div class="flex justify-center items-center h-screen">
  <button class="expandable-button bg-blue-500 text-white px-4 py-3 rounded-full">
    <span class="expandable-content">resume</span>
  </button></div> */}
      </div>
    </div>
  );
};

export default Home;
