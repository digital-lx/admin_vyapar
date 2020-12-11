import React, { useEffect } from "react";

//TODO:Create USER TABLE
// - Create Header Component - customize header css according to headers array length
// - Create List of Data - ListItem -
// - Create footer with pagination


const ListComponent = ({ data, headers, handlePagination }) => {
  useEffect(() => {
    console.log("list_data", data);
  }, []);
 const get_header=()=>{
   const header_list=headers.map((el)=>{
   return <th scope="col">{el}</th>
   })
   return header_list;
 }
 const get_data=()=>{
   const data_list=data.map((el)=>{
     const {full_name,email,contact,password}=el
     return <tr>
         <td>{full_name}</td>
         <td>{email}</td>
         <td>{contact}</td>
         <td>{password}</td>
     </tr>
   })
   return data_list;
 }
  return (
    <div className="contain">
      <text>List Component</text>
      <h4>User</h4>
        <table className="table">
         <thead>
    <tr>
       {get_header()}
    </tr>
  </thead>
  <tbody>
    {get_data()}
  </tbody>
    </table>
    </div>
  );
};

export default ListComponent;
