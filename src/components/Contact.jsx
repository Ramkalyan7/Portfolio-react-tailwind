import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  console.log(process.env.REACT_APP_FORMURL);
  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-r from-[#3a3d40] to-[#181719]  px-4 py-14"
    >
      <div className="flex justify-center items-center">
        <form
          method="POST"
          action={process.env.REACT_APP_FORMURL}
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#be3144] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              {" "}
              Submit the form below or shoot me an email - yramkalyan7@gmail.com
            </p>
          </div>
          <input
            required
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            required
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            required
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-[#be3144] hover:border-[#be3144] px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
      {/* Social icons */}
      <div className="lg:hidden flex items-center justify-center mt-14 ">
        <ul className=" flex-wrap justify-center items-center flex ">
          <li className=" flex justify-between items-center hover:relative hover:bottom-2  my-4  ">
            <a
              className="flex justify-between items-center  text-gray-300"
              href="https://www.linkedin.com/in/ram-kalyan-7961a01b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />{" "}
              <span className="ml-1 font-semibold">LinkedIN</span>
            </a>
          </li>
          <li className=" flex justify-between items-center hover:relative hover:bottom-2  my-4 ">
            <a
              className="flex justify-between items-center  text-gray-300"
              href="https://github.com/Ramkalyan7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />{" "}
              <span className="ml-1 font-semibold">Github</span>
            </a>
          </li>
          <li className=" flex justify-between items-center hover:relative hover:bottom-2  my-4 ">
            <a
              className="flex justify-between items-center  text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yramkalyan7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />{" "}
              <span className="ml-1 font-semibold">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
