import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Center from "./Center";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import Message from "./Message";

const Home = () => {
  return (
    <div>
      <div className="fixed md:hidden top-[80%] left-[50%]">
      <Message />
      </div>
      <div className=" bg-[#f6f7fc] h-screen w-full">
      <Navbar />
      <div className="flex h-[80vh]">
        <Sidebar />
        <Center />
        <RightBar />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Home;
