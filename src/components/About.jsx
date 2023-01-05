import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-300">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi, I'm Pratham, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                Currently, I am doing a Bachelor of Computer Information Systems
                at the University of the Fraser Valley. And hands-on exercises
                have been my priority while learning from course materials with
                remarkable accuracy. With the help of different projects, I have been advancing my skills in
                HTML/CSS/JavaScript, react, Advanced Java, MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
