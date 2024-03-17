import React, { useEffect, useState } from 'react';
import { MdOutlineStarRate } from "react-icons/md";
import { GrFormRefresh } from "react-icons/gr";
import { collection, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';


const Center = () => {
  const [maildata,setMaildata]=useState([]);

  const getMail=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`)
    const messageDoc=collection(userDoc,"Inbox")
    try {
     const data= await getDocs(messageDoc);
     const filteredData=data.docs.map((doc)=>({
      ...doc.data(),
      id:data.id
     }))
     setMaildata(filteredData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getMail();
  },[maildata])

  return (
    <div className='bg-zinc-300 overflow-y-auto min-h-[100vh] md:min-h-[82vh] rounded-2xl w-full p-5'>
      <GrFormRefresh className='text-[24px] ml-3 mb-2 text-gray-500 hover:bg-gray-300 hover:rounded-xl' />
      {maildata.map((data)=>{
        return <>
        <div className=' flex border-b-2 hover:border hover:shadow-lg items-center gap-4 p-2'>
        <MdOutlineStarRate className=' text-[60px] md:text-[20px] text-gray-500' />
        <h4 className='text-[16px] md:text-[17px] font-semibold'>{data.sender}</h4>
        <h5 className='pl-10 text-[12px] md:text-[18px] md:pl-16 text-gray-500'>{data.email}</h5>
      </div>
        </>
      })}
    </div>
  )
}

export default Center
