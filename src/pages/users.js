import React, { useEffect, useState } from "react";

import EditComponent from "../components/EditComponent";
import Generator from "../constant/DataGenerator";

const generator = new Generator();

const User = () => {
  const [input_data, set_input_data] = useState({
    set: generator.createUser(),
  });
  const handleChange = (value, index) => {
    let x = input_data.set;
    x[index].value = value;
    set_input_data({ set: x });
  };
  useEffect(() => {
    console.log("input_data", input_data);
  }, [input_data]);
  return (
    <div>
      <EditComponent
        input_data={input_data}
        handleChange={handleChange}
        mode={"CREATE"}
        type={"User"}
      />
    </div>
  );
};

export default User;
