import React, { useEffect } from "react";

//TODO:Create USER TABLE
// - Create Header Component - customize header css according to headers array length
// - Create List of Data - ListItem -
// - Create footer with pagination

const ListComponent = ({ data, headers, handlePagination }) => {
  useEffect(() => {
    console.log("list_data", data);
  }, []);

  return (
    <div>
      <text>List Component</text>
      <h4>User</h4>
    </div>
  );
};

export default ListComponent;
