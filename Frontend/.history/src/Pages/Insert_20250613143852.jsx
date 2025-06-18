import React from "react";
import axios from "axios";

const Insert = () => {
  let [data, setData] = React.useState({
    Series_No: "",
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  let [error, setError] = React.useState("");

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/insert", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
      setError("Failed to insert data. Please try again.");
    }
  };
  return (
    <div>
      <form action="">
        <h1>Insert Data</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label>Series No:</label>
          <input
            type="text"
            name="Series_No"
            value={data.Series_No}
            onChange={handleChange}
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
        <button type="submit" onClick={handleSubmit}>
          Insert
        </button>
      </form>
    </div>
  );
};

export default Insert;
