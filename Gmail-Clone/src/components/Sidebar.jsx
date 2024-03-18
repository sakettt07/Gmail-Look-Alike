import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdInbox } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import Message from "./Message";
import { IoSendSharp } from "react-icons/io5";

const Sidebar = (props) => {
  const navLinks = [
    {
      name: "Inbox",
      icon: <MdInbox className="text-[18px] font-semibold" />,
      onClick:()=>props.setSubstate("Inbox"),
    },
    {
      name: "Starred",
      icon: <MdOutlineStarRate className="text-[18px] font-semibold" />,
    },
    {
      name: "Snoozed",
      icon: <TbClock className="text-[18px] font-semibold" />,
    },
    {
      name: "Bin",
      icon: <RiDeleteBin6Line className="text-[18px] font-semibold" />,
    },
    {
      name: "Send",
      icon: <IoSendSharp className="text-[16px] font-semibold" />,
      onClick:()=>props.setSubstate("Send"),
    },
  ];
  const [activenav, setActiveNav] = useState(0);

  return (
    <div className="hidden md:block w-80 h-[100%] bg-[#f6f7fc] ">
      <Message />
      <div className="w-62 pt-2 h-64 mt-2">
        {navLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveNav(index);
              if (item.onClick) item.onClick();
            }}
            className={`flex gap-5 pb-2 p-1 pl-7 items-center cursor-pointer ${
              activenav === index
                ? "bg-[#d3e3fd] "
                : "hover:bg-[#d9d9d9]"
            } rounded-r-3xl`}
          >
            {item.icon}
            <h3 className={activenav === index ? "text-[#041e49] font-semibold" : ""}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
