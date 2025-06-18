import React from "react";
import axios from "../axios/axios.js";

const Delete = () => {
  const [seriesNo, setSeriesNo] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.delete(`/user/${setSeriesNo}`);
      setMessage("Deleted successfully!");
    } catch {
      setMessage("Delete failed.");
    }
  };

  return (
    <div>
      <h1>Delete Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleDelete}>
        <div>
          <label>Series No:</label>
          <input
            type="text"
            value={seriesNo}
            onChange={(e) => setSeriesNo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;