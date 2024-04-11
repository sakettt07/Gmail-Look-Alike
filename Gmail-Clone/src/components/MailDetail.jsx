import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const MailDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Access mail ID from route parameter
  const [mailData, setMailData] = useState(null);

  const homee = () => {
    navigate("/home");
  };

  useEffect(() => {
    // Fetch mail details based on ID (replace with your logic)
    const fetchMail = async () => {
      const response = await fetch(`/api/mail/${id}`); // Assuming an API endpoint
      const data = await response.json();
      setMailData(data);
    };
    fetchMail();
  }, [id]);

  return (
    <div className="min-h-[100vh] md:h-screen bg-yellow-300">
      <Navbar />
      <div className="w-full flex  h-screen">
        <Sidebar />
        <div className="p-5 w-full">
          <IoArrowBack
            onClick={homee}
            className="text-gray-500 hover:bg-neutral-200 hover:rounded-full p-2 cursor-pointer text-[40px]"
          />
          {mailData ? (
            <div className="w-full mt-3 bg-red-500 h-[80%]">
              <div>
                <img src={mailData.senderPhoto} alt="" />{" "}
                {/* Assuming sender photo in data */}
                <h2>{mailData.sender}</h2>
                <p>{mailData.email}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: mailData.content }}
                />{" "}
                {/* Assuming content property for mail body */}
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <p>Loading mail details...</p>
              <h2>This page is under construction till then you can explore other functionality</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MailDetail;
