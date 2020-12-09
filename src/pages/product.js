import React, { useState } from "react";

import EditComponent from "../components/EditComponent";
import Generator from "../constant/DataGenerator";

const generator = new Generator();

const Product = () => {
  const [input_data, set_input_data] = useState({
    set: generator.createProduct(),
  });
  const handleChange = (value, index) => {
    let x = input_data.set;
    x[index].value = value;
    set_input_data({ set: x });
  };
  return (
    <div>
      <EditComponent
        input_data={input_data}
        handleChange={handleChange}
        mode={"Create"}
        type={"Product"}
      />
    </div>
  );
};

export default Product;
