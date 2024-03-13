import React,{useState,useEffect} from "react";
import "./Signin.css";
import img from "../assets/images/logo.png";
import img2 from "../assets/images/google.png";
import { signInWithPopup } from "firebase/auth";
import { googelprovider, auth } from "../firebase/setup";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

const Signin = () => {
  const navigate=useNavigate();
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    if (userSignedIn) {
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 3500);

      return () => clearTimeout(timeout);
    }
  }, [navigate, userSignedIn]);

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googelprovider);
      toast.success("Signed Up successfully");
      setUserSignedIn(true); // Set the userSignedIn state to true after signing in
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      
      <div className="main">
        <div className="flex items-center justify-between p-12 flex-wrap md:flex-nowrap">
          <div className="flex justify-center">
            <img
              className="w-[70%] md:w-full mt-[20px] md:mt-[10px]"
              src={img}
              alt="Gmail logo"
              title="Gmail"
            />
          </div>
          <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  mt-2 w-full md:w-[50%] md:h-[20em] h-[10em] flex flex-col items-center">
            <img className="w-20 md:w-56" src={img2} alt="" />
            <h3 className="text-[15px] tracking-tight md:tracking-normal md:text-[24px] mb-6 text-gray-400">
              Create account with the Gmail.com
            </h3>
            <button
              onClick={googleSignin}
              className="bg-blue-800 p-2 md:p-4 rounded-md hover:bg-blue-600 text-white font-extralight md:font-semibold"
            >
              Sign in With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
