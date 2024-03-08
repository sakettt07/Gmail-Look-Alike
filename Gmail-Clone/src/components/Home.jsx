import React from "react";
import Navbar from "./Navbar";
import Center from "./Center";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Center />
      </div>
    </>
  );
};

export default Home;
