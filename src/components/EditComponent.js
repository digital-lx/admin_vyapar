import React from "react";

const CustomInput = ({ value, placeholder, onChange, index }) => {
  return (
    <input
      className={"input_custom"}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value, index)}
    />
  );
};
const EditComponent = ({ input_data, mode, type, handleChange }) => {
  return (
    <div>
      <h1>
        {mode} {type}
      </h1>
      {input_data.set.map((el, index) => {
        return (
          <CustomInput
            value={el.value}
            placeholder={el.placeholder}
            onChange={handleChange}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default EditComponent;
