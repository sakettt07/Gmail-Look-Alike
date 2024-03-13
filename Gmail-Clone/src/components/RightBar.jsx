import React from 'react';
import calender from "../assets/images/calender.png";
import tasks from "../assets/images/tasks.png";
import contact from "../assets/images/contact.png";

const RightBar = () => {
  return (
    <div className='hidden md:block w-16 h-[100%] bg-[#f6f7fc]'>
      <img className='cursor-pointer w-9 pt-7 pl-3' src={calender} title='calender' alt="" />
      <img className='cursor-pointer w-9 pt-7 pl-3' src={tasks} title='tasks' alt="" />
      <img className='cursor-pointer w-9 pt-7 pl-3' src={contact} title='contact' alt="" />
    </div>
  )
}

export default RightBar
