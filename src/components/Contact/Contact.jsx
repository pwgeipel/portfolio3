import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-backgroundColor flex justify-center items-center p-3 pt-14"
    >
      <form
        method="POST"
        action="https://getform.io/f/a11cd75e-ca17-4952-8991-b3dad0310951"
        className="flex flex-col max-w-[700px] w-full"
      >
        <div data-aos="fade-right" data-aos-duration="500">
          <p className="text-3xl font-bold inline border-b-4 border-linkColor text-eggplant">
            Contact
          </p>
          <p className="pt-4">Please fill out the form below to contact me!</p>
        </div>

        <input
          className="p-4 my-4 bg-linkColor rounded"
          type="text"
          placeholder="Name"
          name="name"
          data-aos="fade-up" data-aos-delay="250" data-aos-duration="500"
        />
        <input
          className="p-4 my-0.5 bg-linkColor rounded"
          type="email"
          placeholder="Email"
          name="email"
          data-aos="fade-up" data-aos-delay="250" data-aos-duration="500"
        />
        <textarea
          className="p-4 my-4 bg-linkColor rounded"
          placeholder="Message"
          name="message"
          rows="6"
          data-aos="fade-up" data-aos-delay="250" data-aos-duration="500"
        ></textarea>
        <button className="border-2 border-black px-5 py-3 my-3 flex rounded-lg items-center gap-2 hover:bg-eggplant hover:text-linkColor hover:border-eggplant mx-auto" data-aos="fade-up" data-aos-delay="250" data-aos-duration="500">
          Get In Touch
        </button>
      </form>
    </section>
  );
};

export default Contact;
