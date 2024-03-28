import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import taskss from "../assets/images/tasks.png";
import { MdOutlineDeleteOutline } from "react-icons/md";


import { useState } from 'react';
import { addDoc,doc,collection, getDocs,deleteDoc } from 'firebase/firestore';
import { auth } from '../firebase/setup';
import { database } from "../firebase/setup";


export default function Notes() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // 'These are the main functionalities.'\\
  const [taskInput, setTaskInput] = useState('');
  const [tasks,setTasks]=useState([]);
  const addNotes=async()=>{
    if (!taskInput.trim()) {
      alert("Please enter some data.");
      return;
    }
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Notes")
    try {
      await addDoc(messageRef,{
        notes:taskInput
      });
    } catch (error) {
      console.log(error);
    }
  }
  const showNotes=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Notes")
    try {
     const data= await getDocs(messageRef);
     const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTasks(filteredData)
    } catch (error) {
      console.log(error);
    }
  }
  const deleteNote = async (id) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const noteRef = doc(collection(userDoc, "Notes"), id);
    try {
      await deleteDoc(noteRef);
      // After deletion, update the displayed notes
      showNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img onClick={handleOpen} className='cursor-pointer w-9 pt-7 pl-3' src={taskss} title='tasks' alt="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute md:top-[50%] -translate-x-[50%] -translate-y-[50%] md:left-[93%] p-[1vw] bg-white w-[14vw] min-h-[700px] shadow-2xl ">
          <Typography className='text-gray-500 font-semibold'>
            Add Tasks
          </Typography>
          <input onChange={(e) => setTaskInput(e.target.value)} placeholder='📝tasks' className='border border-black rounded-md p-1 mt-2' />
          <div className='flex mt-4'>
            <button onClick={addNotes} className='bg-blue-500 p-2 rounded-md ml-2 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Add</button>
            <button onClick={showNotes} className='bg-blue-500 p-2 rounded-md ml-2 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Show</button>
          </div>
          <p className='text-[12px] flex items-center gap-2 mt-4'>Click on the task to delete <span> <MdOutlineDeleteOutline className='text-[15px]' /> </span></p>
          <div className='bg-black w- full h-[2px] mt-4'></div>
          <div className='bg-black w-[110px] flex justify-center items-center h-[1px] ml-9 mt-3'></div>
          <div className='overflow-y-hidden'>
            {tasks.map((data,index)=>{
              return <li key={index} className='mt-3 cursor-pointer hover:text-red-700' onClick={() => deleteNote(data.id)}>
              {data.notes}
            </li>
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
