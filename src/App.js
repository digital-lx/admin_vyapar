import "./App.css";

import { useEffect, useState } from "react";

import Generator from "./constant/DataGenerator";
import logo from "./assets/university_bg_s.jpg";

/**TODO----
 * 1.CREATE FAKE SAMPLE DATA OF USER,VENDOR ,PRODUCT;(JS)
 * 2.CREATE A FORM CONTAINING INPUT OR RELEVANT COMPONENT
 * 3.
 * 4.
 *
 */

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
const generator = new Generator();
function App() {
  const [input_data, set_input_data] = useState({
    set: generator.createUser(),
  });
  const handleChange = (value, index) => {
    let x = input_data.set;
    x[index].value = value;
    set_input_data({ set: x });
  };
  return (
    <div className="parent">
      <h3>Your Users</h3>
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
}

export default App;
