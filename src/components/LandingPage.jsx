import React from "react";
import Navbar from "./Navbar";
import dp from "../assets/images/dispaly-pic.png";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-500 to-gray-400 h-screen flex justify-center items-center">
        <div className="w-screen h-64 flex flex-wrap justify-center items-center">
          <div className="flex justify-center items-center m-10">
            <div className="flex-initial">
              <h1 className="text-white text-4xl font-bold ml-2">
                Hello, I am
              </h1>
              <h1 className="text-white text-4xl font-bold ml-2">
                Nydloyd Villaruel Babiera
              </h1>
              <h2 className="text-white text-xl font-bold ml-2">
                Software Developer
              </h2>
            </div>
          </div>
          <div className="m-10">
            <img className="object-fill h-max w-max" src={dp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
