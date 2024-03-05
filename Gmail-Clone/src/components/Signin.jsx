import React from 'react';
import "./Signin.css";
import img from "../assets/images/logo.png"


const Signin = () => {

  return (
    <>
      <div className='main'>
        <div className='flex items-center justify-between p-16 flex-wrap md:flex-nowrap'>
            <div className='flex justify-center'>
                <img className='w-[70%] md:w-full mt-[20px] md:mt-[10px]' src={img} alt="Gmail logo" title='Gmail' />
            </div>
            <div className='bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-2 w-full md:w-[50%] md:h-[20em] h-[10em]'>
                <h1>Create account with the Gmail.com</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin;
