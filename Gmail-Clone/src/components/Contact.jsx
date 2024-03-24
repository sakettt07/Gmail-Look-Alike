import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import contact from "../assets/images/contact.png";
import { useState } from 'react';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]); 
      setTaskInput(''); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <img onClick={handleOpen} className='cursor-pointer w-9 pt-7 pl-3' src={contact} title='contact' alt="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute md:top-[50%] -translate-x-[50%] -translate-y-[50%] md:left-[93%] p-[1vw] bg-white w-[14vw] min-h-[700px] shadow-2xl ">
          <Typography className='text-gray-500 font-semibold'>
            Add Contacts
          </Typography>
          <input onChange={(e) => setTaskInput(e.target.value)} placeholder='📞contact' className='border border-black rounded-md p-1 mt-2' />
          <div className='flex gap-4 mt-4'>
            <button onClick={addTask} className='bg-blue-500 p-2 rounded-md ml-12 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Add</button>
          </div>
          <div className='bg-black w- full h-[2px] mt-4'></div>
          <div className='bg-black w-[110px] flex justify-center items-center h-[1px] ml-9 mt-3'></div>
          <div className='overflow-y-hidden'>
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center mt-3">
              <p>{task}</p>
              <button onClick={() => deleteTask(index)} className="bg-red-500 p-2 rounded-md hover:bg-red-600 hover:text-white">Delete</button>
            </div>
          ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
