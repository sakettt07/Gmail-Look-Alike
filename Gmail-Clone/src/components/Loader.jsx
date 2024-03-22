import React from "react";
import img1 from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img className="mt-12 md:mt-3 w-[40rem]" src={img1} alt="" />
      </div>
      <h2 className="text-center text-[1.8rem] font-semibold text-zinc-700 md:mt-[-100px] mt-[-40px]">Google Workspace</h2>
    </>
  );
};

export default Loader;
