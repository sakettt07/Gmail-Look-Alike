import React, { useState } from "react";
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
      onClick: () => handleNavLinkClick(0, "Inbox"),
    },
    {
      name: "Starred",
      icon: <MdOutlineStarRate className="text-[18px] font-semibold" />,
      onClick: () => handleNavLinkClick(1, "Starred"),
    },
    {
      name: "Snoozed",
      icon: <TbClock className="text-[18px] font-semibold" />,
      onClick: () => handleNavLinkClick(2, "Snoozed"),
    },
    {
      name: "Bin",
      icon: <RiDeleteBin6Line className="text-[18px] font-semibold" />,
      onClick: () => handleNavLinkClick(3, "Bin"),
    },
    {
      name: "Send",
      icon: <IoSendSharp className="text-[16px] font-semibold" />,
      onClick: () => handleNavLinkClick(4, "Send"),
    },
  ];

  const [activeNav, setActiveNav] = useState(0);

  const handleNavLinkClick = (index, substate) => {
    setActiveNav(index);
    props.setSubstate(substate);
  };

  return (
    <div className="md:w-80 h-[100%] bg-[#f6f7fc]">
      <div className="hidden md:block">
      <Message />
      </div>
      <div className="w-62 pt-2 h-64 mt-2">
        {navLinks.map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            className={`flex gap-5 pb-2 p-1 pl-2 md:pl-7 items-center cursor-pointer ${
              activeNav === index
                ? "bg-[#d3e3fd] text-[#041e49] font-semibold"
                : "hover:bg-[#d9d9d9]"
            } rounded-r-3xl`}
          >
            {item.icon}
            <h3 className="hidden md:block">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
