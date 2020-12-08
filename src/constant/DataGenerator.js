export default class Generator {
  createUser = () => {
    const RAW_DATA = [
      ["full_name", "Enter Full Name"],
      ["email", "Enter Email Address"],
      ["contact", "Enter Mobile Number"],
      ["password", "Enter Password"],
    ];
    const Refined_data = [];

    RAW_DATA.map((el, index) => {
      return Refined_data.push({
        id: index,
        placeholder: el[1],
        value: "",
        key: el[0],
      });
    });
    return Refined_data;
  };
  createVendor = () => {
    const RAW_DATA = [
      ["name", "Enter Name"],
      ["email", "Enter Email Address"],
      ["contact", "Enter Mobile Number"],
      ["phone", "Enter Phone"],
      ["website", "Enter Website"],
      ["images", "Select Images"],
    ];
    const Refined_data = [];

    RAW_DATA.map((el, index) => {
      return Refined_data.push({
        id: index,
        placeholder: el[1],
        value: el[0] === "images" ? [] : "",
        key: el[0],
      });
    });
    return Refined_data;
  };
  createProduct = () => {
    const RAW_DATA = [
      ["name", "Enter name"],
      ["category", "Select Category"], //Dropdown
      ["images", "Select Images"],
    ];
    const Refined_data = [];

    RAW_DATA.map((el, index) => {
      return Refined_data.push({
        id: index,
        placeholder: el[1],
        value: "",
        key: el[0],
      });
    });
    return Refined_data;
  };
}
