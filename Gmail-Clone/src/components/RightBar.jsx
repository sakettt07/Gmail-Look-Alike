import React from 'react';
import Notes from './Notes';
import Contact from './Contact';
import Event from './Event';

const RightBar = () => {
  return (
    <div className='hidden md:block w-16 h-[100%] bg-[#f6f7fc]'>
      <Event />
      <Notes />
      <Contact />
    </div>
  )
}

export default RightBar
