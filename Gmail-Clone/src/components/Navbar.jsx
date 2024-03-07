import React from 'react';
import { IoMenu } from "react-icons/io5";
import img1 from "../assets/images/logo.png";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='bg-[#f6f7fc] w-full p-3 pl-5 pr-8 items-center flex justify-between'>
      <div className='flex items-center gap-1'>
      <IoMenu className='text-[25px]' />
      <img src={img1} className='w-12' alt="" />
      <h3 className='text-[22px] text-slate-700 font-normal'>Gmail</h3>
      </div>
      <div className='relative'>
        <IoMdSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[25px] text-slate-700' />
      <input type="text" placeholder='Search mail' className='bg-[#eaf1fb] p-2 rounded-full pl-12 text-[18px] w-[40vw]' />
      </div>
      <div className='flex items-center gap-3 mr-3'>
        <RxQuestionMarkCircled className='text-[23px] text-[#5f6368]' />
        <IoSettingsOutline className='text-[23px] text-[#5f6368]' />
        <CgMenuGridO className='text-[23px] text-[#5f6368]' />
        <FaUserCircle className='text-[23px] text-[#5f6368]' />
      </div>
    </div>
  )
}

export default Navbar
