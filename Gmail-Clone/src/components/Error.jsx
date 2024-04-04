import React from "react";
import img1 from "../assets/images/error.gif"
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="flex justify-center items-center">
        <img className="mt-20 md:mt-24 w-[40rem]" src={img1} alt="" />
      </div>
      <h2 className="text-center text-[1rem] md:text-[1.8rem] font-semibold md:font-normal text-white md:mt-[-100px] mt-[-40px]">
        Check your route again
      </h2>
      <Link to="/"> <h2 className="text-center mt-5 text-blue-600 text-[13px] hover:text-green-400 md:text-[19px]">Click here to fix it</h2></Link>
    </div>
  );
};

export default Error;
