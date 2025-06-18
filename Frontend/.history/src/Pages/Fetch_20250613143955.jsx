import React from "react";
import axios from "../axios/axios.js";

const Fetch = () => {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/fetch");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to fetch data.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {products.map((item, idx) => (
          <li key={idx}>
            {item.Series_No} - {item.Product_Name} - {item.Product_Purchase_Date} - {item.Product_Dealership}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;