import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import calender from "../assets/images/calender.png";
import { addDoc, collection, doc, getDocs,deleteDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';
import { MdOutlineDeleteOutline } from "react-icons/md";



export default function Event() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   this is the main functions for adding the functionalities to add and show events.

  const [event, setEvent] = useState('');
  const [date,setDate]=useState('');
  const [eventdata,setEventdata]=useState([]);
  const addEvent=async()=>{
    if (!event.trim()|| !date.trim()) {
      alert("Please enter some data.");
      return;
    }
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Event")
    try {
      await addDoc(messageRef,{
        event:event,
        date:date,
      });
      setEvent('');
      setDate('');
      showEvent();
    } catch (error) {
      console.log(error);
    }
  }
  const showEvent=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Event")
    try {
     const data= await getDocs(messageRef);
     const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setEventdata(filteredData)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteEvent = async (id) => {
    const userDoc = doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef = doc(collection(userDoc,"Event"), id);
    try {
      await deleteDoc(messageRef);
      // After deletion, update the displayed events
      showEvent();
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(eventdata);
  return (
    <div>
      <img onClick={handleOpen} className='cursor-pointer w-9 pt-7 pl-3' src={calender} title='calender' alt="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute md:top-[50%] -translate-x-[50%] -translate-y-[50%] md:left-[93%] p-[1vw] bg-white w-[14vw] min-h-[700px] shadow-2xl ">
          <Typography className='text-gray-500 font-semibold'>
            Add Event
          </Typography>
          <input onChange={(e)=>setEvent(e.target.value)}  placeholder='Event' className='border border-black rounded-md p-1 mt-2' />
          <input onChange={(e)=>setDate(e.target.value)} type='date' className='border border-black rounded-md p-1 mt-2' />
          <div className='flex  mt-4'>
            <button onClick={addEvent} className='bg-blue-500 p-2 rounded-md ml-1 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Add</button>
            <button onClick={showEvent} className='bg-blue-500 p-2 rounded-md ml-3 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Show</button>
          </div>
          <p className='text-[12px] flex items-center gap-2 mt-4'>Click on the event to delete <span> <MdOutlineDeleteOutline className='text-[15px]' /> </span></p>
          <div className='bg-black w- full h-[2px] mt-2'></div>
          <div className='bg-black w-[110px] flex justify-center items-center h-[1px] ml-9 mt-3'></div>
          <div className='overflow-y-hidden'>
            {eventdata.map((data,index)=>{
              return <div onClick={() => deleteEvent(data.id)} className='cursor-pointer hover:text-red-700'>
              
              <li  className='mt-4 '>Date: {data.date} </li>
              <p className='text-[13px] text-center'>Event Name: <span className='text-[15px] font-semibold'>{data.event}</span></p> 
              </div> 
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
