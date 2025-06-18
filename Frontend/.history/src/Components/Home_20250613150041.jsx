import React from "react";
import Navbar from "./Navbar";
import Fetch from "../Pages/Fetch";

const Home = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Fetch search={search} />
    </div>
  );
};

export default Home;