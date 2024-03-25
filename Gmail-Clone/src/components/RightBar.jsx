import React from 'react';
import calender from "../assets/images/calender.png";
import contact from "../assets/images/contact.png";
import Notes from './Notes';
import Contact from './Contact';
import Event from './Event';

const RightBar = () => {
  return (
    <div className='hidden md:block w-16 h-[100%] bg-[#f6f7fc]'>
      {/* <img className='cursor-pointer w-9 pt-7 pl-3' src={calender} title='calender' alt="" /> */}
      <Event />
      <Notes />
      <Contact />
    </div>
  )
}

export default RightBar
