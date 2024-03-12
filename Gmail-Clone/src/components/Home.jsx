import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Center from "./Center";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <div className=" bg-[#f6f7fc] h-screen w-full">
      <Navbar />
      <div className="flex h-[80vh]">
        <Sidebar />
        <Center />
        <RightBar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
