import  React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HiPencil } from "react-icons/hi";
import { TextField } from "@mui/material";
import { addDoc, collection, doc } from "firebase/firestore";
import { database } from "../firebase/setup";
import { auth } from "../firebase/setup";
import { toast } from "react-toastify";


export default function Message() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [mail,setMail]=useState("");
  const [message,setMessage]=useState("");


  //the below function will save the mail for the reciever.
  const send=async()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.email}`);
    const messageRef=collection(userDoc,"Send")
    try {
        await addDoc(messageRef,{
            email:message,
        });
        handleClose();
    } catch (error) {
        console.log(error);
    }
  }

  // the below function will save the mail for the sender in inbox collection
  const inbox=async()=>{
    setMessage("");
    setMail("");
    const userDoc=doc(database,"Users",`${mail}`);
    const messageRef=collection(userDoc,"Inbox")
    try {
        await addDoc(messageRef,{
            email:message,
            sender:auth.currentUser?.displayName,
        });
        toast('Mail sent', {
          position: "bottom-left",
          autoClose: 1300,
          closeOnClick: true,
          theme: "dark",
          });
       
        send();
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <div onClick={handleOpen} className="flex bg-[#C2e7ff] gap-3 items-center cursor-pointer w-[142.2px] p-[16px] ml-2 rounded-2xl">
        <HiPencil className="text-[25px]" />
        <h3 className="font-semibold text-[15px]">Compose</h3>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" bg-white border-none relative top-24 left-12 md:top-[28%] p-4 mr-2 md:mr-0 md:p-5 md:left-[64%] overflow-hidden rounded-lg w-60 min-h-60 md:w-[480px] md:h-[470px]">
          <Typography className="bg-[#C2e7ff] absolute top-0 p-2 left-0 w-full text-[20px]">
            New Message
          </Typography>
          <div className="mt-3">
          <TextField onChange={(e)=>setMail(e.target.value)} variant="standard" label="To" className="w-full" />
          <br />
          <TextField variant="standard" label="Subject" className="w-full" />
          <br />
          <TextField onChange={(e)=>setMessage(e.target.value)} multiline rows={10} className="w-full border-none" />
          </div>
          <button onClick={inbox} className="bg-[#0B57D0] hover:bg-[#28354a] mt-3 p-3 rounded-full pl-11 pr-11 text-white font-semibold">Send</button>
        </Box>
      </Modal>
    </div>
  );
}
