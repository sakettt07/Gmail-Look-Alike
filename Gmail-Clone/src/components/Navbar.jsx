import React from 'react';
import img1 from "../assets/images/logo.png";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { auth } from '../firebase/setup';
import "./Navbar.css";
import Profile from './Profile';
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const signin = () => {
    navigate('/');
  }

  return (
    <div className='bg-[#f6f7fc] w-full p-3 pl-5 pr-8 items-center flex justify-between'>
      <div className='flex items-center gap-1'>
        <img title='Gmail' src={img1} className='w-12 cursor-pointer' alt="" />
        <h3 className='text-[22px] cursor-pointer font-semibold text-slate-700'>Gmail</h3>
      </div>
      <div className='search relative'>
        <IoMdSearch title='Search' className='absolute md:pl-[400px] pl-[3px] ml-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-[22px] text-slate-700' />
        <input onChange={(e) => props.setSearch(e.target.value)} type="text" placeholder='Search mail' className='bg-[#eaf1fb] p-3 rounded-full pl-12 text-[18px] w-[40vw]' />
      </div>
      <div className='flex items-center gap-3 mr-3'>
        <RxQuestionMarkCircled title='Support' className='text-[25px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        <IoSettingsOutline title='Settings' className='text-[25px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        <CgMenuGridO title='Explore more' className='text-[28px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        {auth.currentUser ? (
          <Profile />
        ) : (
          <FaUserCircle onClick={signin} className='text-[28px] cursor-pointer' />
        )}
      </div>
    </div>
  )
}

export default Navbar;
