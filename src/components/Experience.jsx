import React from "react";
import TaskLists from "./TaskLists";

const Experience = () => {
  const tasks1 = [
    "Enhanced existing custom applications of the company that causes the apps to slow down in the backend part of the applications",
    "Organized local servers used and accessed by the different offices from different locations.",
    "Executed latest tech stack practices that produces high value codes.",
  ];
  const tasks2 = [
    "Implemented and organized modules used for the finance department of the company.",
    "Formulated reports that can be used by the different sub branches of the company.",
    "Devised business process to avoid anomaly especially for the cash transactions.",
  ];
  return (
    <div>
      <div className="flex flex-wrap w-screen">
        <div className="flex-wrap ml-10">
          <h1 className="text-white text-2xl font-bold">
            Biotech Farms Incorporated
          </h1>
          <p className="text-white text-base">
            Backend Developer and DevOps (2022 - Present)
          </p>
          <ul className="list-disc mx-8 text-white">
            {tasks1.map((task1, index) => (
              <li key={index}>{task1}</li>
            ))}
          </ul>
        </div>
        <div className="flex-wrap mx-8">
          <h1 className="text-white text-2xl font-bold">
            Soft Artifact Incorporated
          </h1>
          <p className="text-white text-base">
            Software Developer (2020 - 2022)
          </p>
          <ul className="list-disc mx-8 text-white">
            {tasks2.map((task2, index) => (
              <li key={index}>{task2}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
