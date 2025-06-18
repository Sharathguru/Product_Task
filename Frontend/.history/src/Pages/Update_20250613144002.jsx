import React from "react";
import axios from "../axios/axios.js";

const Update = () => {
  const [seriesNo, setSeriesNo] = React.useState("");
  const [data, setData] = React.useState({
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.put(`/update/${seriesNo}`, data);
      setMessage("Update successful!");
    } catch {
      setMessage("Update failed.");
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label>Series No:</label>
          <input
            type="text"
            value={seriesNo}
            onChange={(e) => setSeriesNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Purchase Date:</label>
          <input
            type="date"
            name="Product_Purchase_Date"
            value={data.Product_Purchase_Date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="Product_Name"
            value={data.Product_Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Dealership:</label>
          <input
            type="text"
            name="Product_Dealership"
            value={data.Product_Dealership}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;