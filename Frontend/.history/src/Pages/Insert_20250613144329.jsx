import React from "react";
import axios from "../axios/axios.js";

const Insert = () => {
  const [data, setData] = React.useState({
    Series_No: "",
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post("/user", data);
      setSuccess("Inserted successfully!");
      setData({
        Series_No: "",
        Product_Purchase_Date: "",
        Product_Name: "",
        Product_Dealership: "",
      });
    } catch (err) {
      setError("Failed to insert data. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Insert Data</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <div>
          <label>Series No:</label>
          <input
            type="text"
            name="Series_No"
            value={data.Series_No}
            onChange={handleChange}
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
            required
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="Product_Name"
            value={data.Product_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Dealership:</label>
          <input
            type="text"
            name="Product_Dealership"
            value={data.Product_Dealership}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default Insert;
