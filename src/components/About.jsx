import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#45567d] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#be3144]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ram, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me.
            </p>
            <p>
              I am a first year student pursuing Bachelor of Technology in
              Computer Science from Lovely Professional University , Punjab ,
              India.
            </p>
            <p className="underline">
              {" "}
              <a href="https://www.udemy.com/certificate/UC-ff81bbd8-4892-4890-ba2a-521b09259da2/">
                I have done a full stack web development course from udemy by
                Dr.Angela Yu{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
