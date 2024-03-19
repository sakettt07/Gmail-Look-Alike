import React, { useEffect, useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { GrFormRefresh } from "react-icons/gr";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth, database } from "../firebase/setup";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Center = (props) => {
  const [maildata, setMaildata] = useState([]);
  const [hoveredItem,setHoveredItem]=useState(null);

  const getMail = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(
      userDoc,
      `${props.substate ? props.substate : "Inbox"}`
    );
    try {
      const data = await getDocs(messageDoc);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: data.id,
      }));
      setMaildata(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMail();
  }, [props.substate]);

  return (
    <div className="bg-zinc-300 overflow-y-auto min-h-[100vh] md:min-h-[82vh] rounded-2xl w-full p-5">
      <GrFormRefresh className="text-[24px] ml-3 mb-2 text-gray-500 hover:bg-gray-300 hover:rounded-xl" />
      {props.search
        ? maildata
            .filter((data) => data.sender.includes(props.search))
            .map((data, index) => {
              return (
                <>
                  <div key={index} onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)} className=" flex justify-between items-center gap-4 border-b-2 hover:border hover:shadow-lg p-2">
                  <MdOutlineStarRate
                    className={`cursor-pointer hidden md:block text-[23px] md:text-[28px] text-gray-500 ${
                      hoveredItem === index ? "visible" : "invisible"
                    }`}
                  />
                  <h4 className="text-[16px]  md:text-[17px] font-semibold">
                    {data.sender}
                  </h4>
                  <p className="pl-10 truncate  text-[12px] md:text-[18px] md:pl-16 text-gray-500">
                    {data.email}
                  </p>
                  <MdOutlineDeleteOutline
                    className={` text-[16px] md:text-[20px] cursor-pointer md:mr-12 ${
                      hoveredItem === index ? "visible" : "invisible"
                    }`}
                  />
                </div>
                </>
              );
            })
        : maildata.map((data, index) => {
            return (
              <>
                <div key={index} onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)} className=" flex  items-center gap-4 border-b-2 hover:border hover:shadow-lg p-2">
                  <MdOutlineStarRate
                    className={`cursor-pointer hidden md:block text-[23px] md:text-[28px] text-gray-500 ${
                      hoveredItem === index ? "visible" : "invisible"
                    }`}
                  />
                  <h4 className="text-[16px] md:text-[17px] font-semibold">
                    {data.sender}
                  </h4>
                  <p className="pl-10 truncate  text-[12px] md:text-[18px] md:pl-16 text-gray-500">
                    {data.email}
                  </p>
                  <MdOutlineDeleteOutline
                    className={` text-[16px] md:text-[20px] cursor-pointer md:mr-12 ${
                      hoveredItem === index ? "visible" : "invisible"
                    }`}
                  />
                </div>
              </>
            );
          })}
    </div>
  );
};

export default Center;
