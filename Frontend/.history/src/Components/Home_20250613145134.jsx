import React from "react";
import Navbar from "./Navbar";
import Fetch from "../Pages/Fetch";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <h1>Product Search Home</h1> */}
      <Fetch />
    </div>
  );
};

export default Home;