import * as React from 'react';
import Box from '@mui/material/Box';
import { FcGoogle } from "react-icons/fc";
import Modal from '@mui/material/Modal';
import { CgMenuGridO } from "react-icons/cg";
import { auth } from '../firebase/setup';
import { FaYoutube } from "react-icons/fa";
import img1 from "../assets/images/news.png"
import img2 from "../assets/images/meet.png"
import img3 from "../assets/images/maps.png"
import img4 from "../assets/images/play.png"
import img5 from "../assets/images/calender.png"
import img6 from "../assets/images/logo.png";
import img7 from "../assets/images/chat.png";
import img8 from "../assets/images/contact.png";
import img9 from "../assets/images/tasks.png";


export default function Explore() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CgMenuGridO onClick={handleOpen} title='Explore more' className='text-[28px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[10%] left-[72%] bg-[#f6f7fc] p-8 rounded-[30px] w-[340px]">
          <div className='flex gap-12 flex-wrap'>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-12' src={auth.currentUser?.photoURL} alt="" />
            <h3 className='text-black'>Account</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <FcGoogle className='text-[50px]' />
            <h3 className='text-black'>Search</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className=' w-12' src={img1} alt="" />
            <h3 className='text-black'>News</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <FaYoutube className='text-[50px] text-red-600' />
            <h3 className='text-black'>Youtube</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-12' src={img2} alt="" />
            <h3 className='text-black'>Meet</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-12' src={img3} alt="" />
            <h3 className='text-black'>Maps</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-[60px]' src={img6} alt="" />
            <h3 className='text-black ml-2'>Gmail</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-12' src={img4} alt="" />
            <h3 className='text-black'>Play</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-[48px]' src={img5} alt="" />
            <h3 className='text-black'>Calendar</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-[48px]' src={img7} alt="" />
            <h3 className='text-black'>Chat</h3>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-[40px]' src={img8} alt="" />
            <h5 className='text-black'>Contact</h5>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='rounded-full w-[40px]' src={img9} alt="" />
            <h5 className='text-black'>Tasks</h5>
          </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
