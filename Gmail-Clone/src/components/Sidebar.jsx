import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdInbox } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import Message from "./Message";

const Sidebar = () => {
  const navLinks = [
    {
      name: "Inbox",
      icon: <MdInbox className="text-[18px] font-semibold" />,
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
  ];
  const [activenav, setActiveNav] = useState(0);

  return (
    <div className="hidden md:block w-80 h-[100%] bg-[#f6f7fc] ">
      {/* <div className="flex bg-[#C2e7ff] gap-3 items-center w-[142.2px] p-[16px] ml-2 rounded-2xl">
        <HiPencil className="text-[25px]" />
        <h3 className="font-semibold text-[15px]">Compose</h3>
      </div> */}
      <Message />
      <div className="w-62 pt-2 h-64 mt-2">
        {navLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveNav(index)}
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
