import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const Works = () => {
  return (
    <div className="flex flex-wrap flex-col space-y-4 justify-center items-center w-screen">
      <div>
        <h1 className="text-5xl ml-5">Work Experiences</h1>
        <div className="rounded bg-gray-500 mt-6 ml-6 mr-6 p-6">
          <Experience />
        </div>
      </div>
      <div>
        <h1 className="text-5xl ">Projects </h1>
        <div className="rounded bg-gray-500 mt-6 ml-8 p-6">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Works;
