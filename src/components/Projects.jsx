import React from "react";

const Projects = () => {
  const proj1 = [
    "Designed and implemented an application for a government organization to cater the customers orderly, and a data entry for a specific transactions type used within organization",
    "Established a server for the organization to be used on day to day basis and deployment of the application",
    "Formulate reports for all transactions created within the organization starting from queuing numbers daily, weekly, and monthly until the data entry transactions.",
  ];

  const proj2 = [
    "Engineered a thesis that uses computer vision to classify the eggs by its sizes, python was used to develop this study.",
    "Implemented the prototype of the study in one of our local universities",
  ];

  const proj3 = [
    "Designed an electronic prototype for the said study the will monitory the pH and TDS level of a hydroponics farm and notify the owner if the values are out of range",
    "Formulate reports based on the movement of pH and TDS level of the hydroponics farm.",
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex-wrap ml-10 w-2/5">
          <h1 className="text-white text-2xl font-bold">
            Queuing & Data Entry Application
          </h1>
          <ul className="list-disc mx-8 text-white">
            {proj1.map((proj, index) => (
              <li key={index}>{proj}</li>
            ))}
          </ul>
        </div>
        <div className="flex-wrap ml-10 w-2/5">
          <h1 className="text-white text-2xl font-bold">
            Chicken Eggs Classifier Using Computer Vision (Thesis)
          </h1>
          <ul className="list-disc mx-8 text-white">
            {proj1.map((proj, index) => (
              <li key={index}>{proj}</li>
            ))}
          </ul>
        </div>
        <div className="flex-wrap ml-10 w-2/5">
          <h1 className="text-white text-2xl font-bold">
            Monitoring the pH and TDS Level with GSM Module in Hydroponics
            Farming (Thesis)
          </h1>
          <ul className="list-disc mx-8 text-white">
            {proj3.map((proj, index) => (
              <li key={index}>{proj}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
