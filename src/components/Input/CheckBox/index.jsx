import React from "react";

const CheckBox = ({ isChecked, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <input
      checked={isChecked}
      type="checkbox"
      className="input-checkbox"
      onChange={handleChange}
    />
  );
};

export default CheckBox;
