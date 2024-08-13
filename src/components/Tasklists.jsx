import React from "react";

const TaskLists = ({tasks}) => {
  return (
    <>
      <ul className="list-disc mx-8">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default TaskLists;
