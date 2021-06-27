import React from "react";

import TaskCard from "../TaskCard";

import "./style.scss";

const TasksList = ({ tasks }) => {
  const renderTasks = () => {
    if (tasks.lenght) return null;

    return tasks.map(({ status, id, title, description }) => (
      <TaskCard
        key={id}
        id={id}
        title={title}
        description={description}
        status={status}
      />
    ));
  };

  return <div className="tasks-list">{renderTasks()}</div>;
};

export default TasksList;
