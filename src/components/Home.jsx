import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-[#3a3d40] to-[#181719]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#be3144]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f0f0f0]">
          Ram Kalyan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#bac4e2]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#99a3bf] py-4 max-w-[700px]">
          I’m a full-stack web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#be3144] hover:border-[#be3144]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
