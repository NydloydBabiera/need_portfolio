import React from "react";
import Navbar from "./Navbar";
import dp from "../assets/images/russel-up.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gray-500 flex flex-wrap items-center justify-center md:items-stretch md:justify-start h-screen">
        <a class="flex flex-1 items-center mr-4">
          {/* <span class="hidden md:block text-white text-2xl font-bold ml-2"> */}
           <h1 className="text-white text-2xl font-bold ml-2">Title here</h1> 
           <h2 className="text-white text-2xl font-bold ml-2">Subtitle</h2>
          {/* </span> */}
        </a>
        <div className="md:ml-auto">
          <div className="border-solid border-2 border-white-600 flex space-x-2 m-10">
            <img className="object-fill h-96 w-64 " src={dp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
