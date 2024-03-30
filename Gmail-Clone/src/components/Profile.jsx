import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import img2 from "../assets/images/user.png";
import { auth, googelprovider } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Profile=()=> {
  const navigate=useNavigate();
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSignout=async()=>{
    try {
      await signOut(auth,googelprovider);
      auth.currentUser===null&&navigate("/");
      toast.success("Logged Out Successfully")
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <img title='User' onClick={handleOpen} src={auth.currentUser ? auth.currentUser.photoURL : img2} className='w-9 rounded-full cursor-pointer' alt="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute bg-[#d5e4f9] w-[14rem] top-[10%] left-[20%] h-[12rem] md:w-[28vw] md:h-[23vw] md:top-[10%] md:left-[68%] rounded-2xl p-3">
          <h4 className='text-center text-[12px] md:text-[20px] text-zinc-800 font-semibold'>
          {auth.currentUser ? auth.currentUser.email : 'abc@gmail.com'}
          </h4>
          <img title='User' src={auth.currentUser ? auth.currentUser.photoURL : img2} className='w-10 md:w-24 ml-20 md:ml-[9.6rem] mt-3 md:mt-7 rounded-full cursor-pointer' alt="" />
          <h2 id="modal-modal-description" className='text-center text-[14px] md:text-[17px] font-semibold mt-1' sx={{ mt: 2 }}>
            Hi,{auth.currentUser?.displayName}!
          </h2>
          <div className='mt-2 ml-12 md:mt-5 md:ml-[9.4rem] gap-4'>
          <button onClick={handleSignout} className='bg-white p-2 md:p-4 ml-2 rounded-2xl hover:bg-orange-100 flex justify-center items-center gap-3'><LuLogOut /> Logout</button>
          </div>
          <p className='text-center font-semibold md:mt-6 mt-2 text-[11px] md:text-[13px]'>Privacy policy .  Terms of service</p>
        </Box>
      </Modal>
    </div>
  );
}
export default Profile;
