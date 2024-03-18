import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Center from "./Center";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import Message from "./Message";

const Home = () => {

  const[substate,setSubstate]=useState("");
  const[search,setSearch]=useState("");
  return (
    <div>
      <div className="fixed md:hidden top-[80%] left-[50%]">
      <Message />
      </div>
      <div className=" bg-[#f6f7fc] h-screen w-full">
      <Navbar setSearch={setSearch} />
      <div className="flex h-[80vh]">
        <Sidebar setSubstate={setSubstate}/>
        <Center search={search} substate={substate} />
        <RightBar />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Home;
