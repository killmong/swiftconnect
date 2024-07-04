"use client";
import Container from "@/common/components/Container";
import { useState } from "react";
import Link from "next/link";
import Login from "./Login";
import BackgroundBeams from "@/common/components/BackgroundBeams";
const Loginsignup = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    
<div className="background flex flex-col justify-items-center flex-1  px-4 lg:pt-24 md:px-20 text-center w-full  login-signup-page">
      <Container>
        
        <div className="bg-gray-50  rounded-2xl md:m-auto  lg:shadow-2xl flex  lg:flex lg:justify-between w-full max-w-4xl">
         <div className="block  w-full lg:w-1/2 lg:p-5   md:py-10 py-24 ">
         <Login />
         </div>
         
         <div className="  lg:rounded-tr-2xl lg:rounded-br-2xl  md:py-36 px-12 hidden md:block bg-red-600 text-gray-100">
            <h2 className="text-3xl font-bold mb-2 ">Welcome </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">FIll Your Details and Start Your Journey with us</p>
            <Link href='#' className="border-2 rounded-full text-white inline-block font-semibold hover:bg-gray-50 hover:text-red-500 border-white px-12 py-2  ">Signup</Link>
            <div className=" mx-2 my-2 py-1 flex lg:hidden flex-row justify-items-center" >
                <p>Already have an account?</p>
                <Link href='#' className="font-bold py-2 px-2 text-black">Login here</Link>
            </div>
            
         </div>
         </div>
      </Container>
    </div>
    
  );
};

export default Loginsignup;
