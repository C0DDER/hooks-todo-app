import React, { useState, useEffect } from "react";

import TasksList from "../../components/TasksList";
import CreateTask from "../../components/CreateTask";
import TaskService from "../../services/task.setvice";

import "./style.scss";

const Tasks = () => {
  const [list, setList] = useState([]);

  // добавляет новое задание в начало списка
  const addTask = (task) => {
    setList([task, ...list]);
  };

  const getTasks = async () => {
    // возвращает список задач
    const tasks = await TaskService.getAllTasks();

    // обновляет состояние компонента
    setList(tasks);
  };

  useEffect(() => {
    console.log('task page init');
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
