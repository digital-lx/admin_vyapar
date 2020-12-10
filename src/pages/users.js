import React, { useEffect, useState } from "react";

import EditComponent from "../components/EditComponent";
import Fake from "../constant/FakeData";
import Generator from "../constant/DataGenerator";
import ListComponent from "../components/ListComponent";
import Services from "../Services";
import data from "../constant/user_sample.json";

const generator = new Generator();
const service = new Services();
const fake = new Fake();
const User = () => {
  const [input_data, set_input_data] = useState({
    set: generator.createUser(),
  });
  const [list_data, set_list_data] = useState([]);
  const [load, setLoad] = useState(false);
  const handleChange = (value, index) => {
    let x = input_data.set;
    x[index].value = value;
    set_input_data({ set: x });
    console.log(input_data);
  };

  const getUsers = async () => {
    setLoad(true);
    //TODO fetch users
    // const response = await service.get_users();
    //TODO error handling
    set_list_data(data);
    setLoad(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <EditComponent
        input_data={input_data}
        handleChange={handleChange}
        mode={"CREATE"}
        type={"User"}
      />
      {load ? (
        <text>loading</text>
      ) : (
        <ListComponent
          data={list_data}
          headers={fake.User_header}
          handlePagination={() => console.log("handle")}
        />
      )}
    </div>
  );
};

export default User;
