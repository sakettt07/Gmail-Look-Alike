import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img2 from "../assets/images/user.png";
import { auth, googelprovider } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '37%',
  left: '82%',
  transform: 'translate(-50%, -50%)',
  width: "28vw",
  height: "23vw",
  bgcolor: '#d5e4f9',
  border: '1px solid #23617d',
  boxShadow: 20,
  borderRadius:"29px",
  p: 4,
};

const Profile=()=> {
  const navigate=useNavigate();
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSignout=async()=>{
    try {
      await signOut(auth,googelprovider);
      auth.currentUser===null&&navigate("/");
      
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
        <Box sx={style}>
          <h4 className='text-center text-zinc-800 font-semibold'>
          {auth.currentUser ? auth.currentUser.email : 'abc@gmail.com'}
          </h4>
          <img title='User' src={auth.currentUser ? auth.currentUser.photoURL : img2} className='w-24 ml-32 mt-7 rounded-full cursor-pointer' alt="" />
          <h2 id="modal-modal-description" className='text-center text-[17px] font-semibold mt-1' sx={{ mt: 2 }}>
            Hi,{auth.currentUser?.displayName}!
          </h2>
          <div className='mt-5 ml-32 gap-4'>
          <button onClick={handleSignout} className='bg-white p-4 ml-2 rounded-2xl hover:bg-orange-100 flex justify-center items-center gap-3'><LuLogOut /> Logout</button>
          </div>
          <p className='text-center font-semibold mt-6 text-[13px]'>Privacy policy .  Terms of service</p>
        </Box>
      </Modal>
    </div>
  );
}
export default Profile;
