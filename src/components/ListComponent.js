import React from "react";
const ListComponent = (props) => {

console.log('abcd',props.user_data.set)
const get_list=()=>{
const list_item =props.user_data.set.map((el)=>{return<li>{el.key}:{el.value}</li>
 })
return list_item;
}
  return (
    <div>
      <text>List Component</text>
      <h4>User</h4>
      <ul>{get_list()}</ul>
    </div>
  );
};

export default ListComponent;
