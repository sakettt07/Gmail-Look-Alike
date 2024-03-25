import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import contactimg from "../assets/images/contact.png";
import { useState } from 'react';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // These are the main functionlities for adding the displaying the contact.

  const [contact, setContact] = useState('');
  const [contactdata,setContactdata]=useState([]);
  const addNotes=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Contacts")
    try {
      await addDoc(messageRef,{
        contact:contact
      });
    } catch (error) {
      console.log(error);
    }
  }
  const showNotes=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Contacts")
    try {
     const data= await getDocs(messageRef);
     const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setContactdata(filteredData)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <img onClick={handleOpen} className='cursor-pointer w-9 pt-7 pl-3' src={contactimg} title='contact' alt="" />
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
          <input onChange={(e) => setContact(e.target.value)} placeholder='📞contact' className='border border-black rounded-md p-1 mt-2' />
          <input onChange={(e) => setContact(e.target.value)} placeholder='name' className='border border-black rounded-md p-1 mt-2' />
          <div className='flex gap-4 mt-4'>
            <button  className='bg-blue-500 p-2 rounded-md ml-12 hover:bg-blue-600 hover:text-white pl-6 pr-6'>Add</button>
          </div>
          <div className='bg-black w- full h-[2px] mt-4'></div>
          <div className='bg-black w-[110px] flex justify-center items-center h-[1px] ml-9 mt-3'></div>
          <div className='overflow-y-hidden'>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
