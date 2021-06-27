import React, { useState } from "react";
import { Link } from "react-router-dom";

import CheckBox from "../../components/Input/CheckBox";

import "./style.scss";

const TaskCard = ({ status, id, title, description }) => {
  const [isChecked, toggleChecked] = useState(false);
  const [textClass, setTextClass] = useState("in-progress");

  const handleChange = (e) => {
    toggleChecked(!isChecked);
    setTextClass(!isChecked ? "done" : "in-progress");
  };

  return (
    <div className="task-container">
      <CheckBox onChange={handleChange} />
      <Link to={`/edit/${id}`}>
        <p className={textClass}>{title}</p>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default TaskCard;
