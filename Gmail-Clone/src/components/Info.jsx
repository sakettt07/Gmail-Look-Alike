import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaInfo } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

export default function Info() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <GrCircleInformation
        onClick={handleOpen}
        title="Support"
        className="text-[25px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[11%] rounded-sm left-[61%] w-[400px] bg-white p-7">
          <h2 className="ml-36 font-semibold text-green-700 text-[40px]"><FaInfo /></h2>

          <div className="mt-3 font-semibold">
            Important Instructions to be taken care off
          </div>
          <li className="text-wrap text"> Don't reload the page After getting logged in it will result in 404 error.</li>
          <li>When you have composed your message then have a look at the send section.</li>
          
        </Box>
      </Modal>
    </div>
  );
}
