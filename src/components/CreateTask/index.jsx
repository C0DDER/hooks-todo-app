import React, { useState } from "react";

import TextInput from "../Input/Text";
import Button from "../Button";
import TaskService from "../../services/task.setvice";

import "./style.scss";

const CreateTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = await TaskService.createTask({ title, description });

    addTask(task);

    setTitle("");
    setDescription("");
  };

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          value={title}
          placeholder="Add title to your task"
          onChange={handleTitle}
          name="title"
        />
        <TextInput
          value={description}
          placeholder="And description"
          onChange={handleDescription}
          name="description"
        />
      </div>
      <Button text="Add" />
    </form>
  );
};

export default CreateTask;
