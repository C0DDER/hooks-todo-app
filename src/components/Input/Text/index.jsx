import React from "react";

import "./style.scss";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={(e) => onChange(e)}
      value={value}
      placeholder={placeholder}
      className="input-text"
    />
  );
};

export default Input;
