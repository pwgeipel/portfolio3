import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full md:h-screen bg-backgroundColor">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div classname="sm:text-right">
            <p
              className="text-3xl font-bold inline border-b-4 border-linkColor text-eggplant"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-3xl pt-8">
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              Hello, I'm Peter. Pleased to meet you!
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <p>
              I am a full-stack web developer.  In February 2023, I successfully completed the Full-Flex Web Development Bootcamp with University of Wisconsin: Extended Campus. 
            </p>
            <br />
            <p>
              I am eager for the opportunity to start my new career as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
