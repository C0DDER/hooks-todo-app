import React from "react";

import "./style.scss";

const Button = ({ text, onClick }) => (
  <button onClick={onClick} className="button">
    {text}
  </button>
);

export default Button;
