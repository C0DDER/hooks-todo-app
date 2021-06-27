import React, { useState, useEffect } from "react";

import TasksList from "../../components/TasksList";
import CreateTask from "../../components/CreateTask";
import TaskService from "../../services/task.setvice";

import "./style.scss";

const Tasks = () => {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    setList([task, ...list]);
  };

  const getTasks = async () => {
    const tasks = await TaskService.getAllTasks();

    setList(tasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="tasks-wrapper">
      <CreateTask addTask={addTask} />
      <TasksList tasks={list} />
    </div>
  );
};

export default Tasks;
