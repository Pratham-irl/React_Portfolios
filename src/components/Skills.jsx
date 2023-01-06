import React from "react";

import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import Node from "../assets/Node.png";
import ReactIcon from "../assets/ReactIcon.png";
import Tailwind from "../assets/Tailwind.png";
import Firebase from "../assets/Firebase.png";
import Github from "../assets/Github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-green-300">Skills</p>
          <p className="py-4">Tools and Technologies I've woked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML Icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactIcon} alt="HTML Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML Icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML Icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="HTML Icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
