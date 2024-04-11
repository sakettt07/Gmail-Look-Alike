import React, { useEffect, useState } from "react";
import { GrFormRefresh } from "react-icons/gr";
import { TbClock } from "react-icons/tb";
import {useNavigate} from "react-router-dom"
import { PiStarFill } from "react-icons/pi";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { auth, database } from "../firebase/setup";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Center = (props) => {
  const [maildata, setMaildata] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate=useNavigate();


  const deleteMail = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Bin", `${data.id}`);
    const deleteDocc=doc(userDoc,"Inbox",`${data.id}`);
    try {
      await deleteDoc(deleteDocc);
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
      });
      toast('Mail Added to Bin!', {
        position: "bottom-left",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        });
    } catch (error) {
      console.log(error);
    }
  };

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
        id: doc.id,
      }));
      setMaildata(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMail();
  }, [props.substate]);

  const starred = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Starred", `${data.id}`);
    try {
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        starred: "true",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const snoozed = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const snoozeDoc=doc(userDoc,"Inbox",`${data.id}`);
    try {
      await deleteDoc(snoozeDoc);
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-200 overflow-y-auto min-h-[100vh] md:min-h-[82vh] rounded-2xl w-full p-5">
      <GrFormRefresh className="text-[24px] ml-3 mb-2 text-gray-500 hover:bg-gray-300 hover:rounded-xl" />
      {props.search
        ? maildata
            .filter((data) => data.sender.includes(props.search))
            .map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={()=>navigate(`/mail/${data.id}`)}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className=" flex justify-between items-center gap-4 border-b-2 hover:border hover:shadow-lg p-2"
                  >
                    {data.starred ? (
                      <PiStarFill
                        onClick={() => starred(data)}
                        className={`cursor-pointer hidden md:block text-[23px] md:text-[21px] text-yellow-500 ${
                          hoveredItem === index ? "visible" : "invisible"
                        }`}
                      />
                    ) : (
                      <PiStarFill
                        onClick={() => starred(data)}
                        className={`cursor-pointer hidden md:block text-[23px] md:text-[21px] text-gray-500 ${
                          hoveredItem === index ? "visible" : "invisible"
                        }`}
                      />
                    )}
                    <h4 className="text-[16px]  md:text-[17px] font-semibold">
                      {data.sender}
                    </h4>
                    <p className="pl-10 truncate  text-[12px] md:text-[18px] md:pl-16 text-gray-500">
                      {data.email}
                    </p>
                    <MdOutlineDeleteOutline
                      onClick={() => deleteMail(data)}
                      className={` text-[16px] md:text-[20px] cursor-pointer md:mr-[-10px] ${
                        hoveredItem === index ? "visible" : "invisible"
                      }`}
                    />
                    <TbClock
                    onClick={() => snoozed(data)}
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
                <div
                  key={index}
                  onClick={()=>navigate(`/mail/${data.id}`)}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className=" flex  items-center gap-4 border-b-2 hover:border hover:shadow-lg p-2"
                >
                  {data.starred ? (
                    <PiStarFill
                      onClick={() => starred(data)}
                      className={`cursor-pointer hidden md:block text-[23px] md:text-[21px] text-yellow-500 ${
                        hoveredItem === index ? "visible" : "invisible"
                      }`}
                    />
                  ) : (
                    <PiStarFill
                      onClick={() => starred(data)}
                      className={`cursor-pointer hidden md:block text-[20px] md:text-[21px] text-gray-500 ${
                        hoveredItem === index ? "visible" : "invisible"
                      }`}
                    />
                  )}
                  <h4 className="text-[16px] md:text-[17px] font-semibold">
                    {data.sender}
                  </h4>
                  <p className="pl-10 truncate text-[12px] md:text-[18px] md:pl-16 text-gray-500">
                    {data.email}
                  </p>
                  <MdOutlineDeleteOutline
                    onClick={() => deleteMail(data)}
                    className={` text-[16px] md:text-[20px] cursor-pointer md:mr-[-10px] ${
                      hoveredItem === index ? "visible" : "invisible"
                    }`}
                  />
                  <TbClock
                    onClick={() => snoozed(data)}
                      className={` text-[16px] md:text-[20px] cursor-pointer md:mr-12 ${
                        hoveredItem === index ? "visible" : "invisible"
                      }`}
                    />
                </div>
              </>
            );
          })}
      <p className=" left-[20%] text-[12px] md:text-[15px] bottom-0 md:left-1/2 fixed md:bottom-16">
        Privacy policy . Terms of service
      </p>
    </div>
  );
};

export default Center;
