"use client";
import Container from "@/common/components/Container";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Loginsignup = () => {
  const [isLogin, setisLogin] = useState(true);

  return (
    <div className="bg-slate-900  lg:px-10 login-signup-page">
      <Container>
        <div className="flex rounded-3xl p-10 lg:p-2 border-solid border-4 bg-gray-900 border-sky-500 justify-center items-center">
          {/* container which holds both image and form */}
          <div className="w-1/2 sm:block hidden p-5"></div>
          <div className="flex  flex-col lg:w-1/2">
            {/* container which holds form */}
            <p className="font font-bold py-2  text-center text-3xl text-sky-700">
              Welcome
            </p>
            <p className="text-center text-sm lg:text-lg px-4 text-gray-50">
              Your Next Adventure Starts Here
            </p>
            <div className="flex flex-row justify-center space-x-8 space-y-4">
              <button
                className={`mt-4 border-0 hover:scale-105 font-extrabold px-4 py-2 rounded ${
                  isLogin ? "text-sky-500  bg-gray-900" : "text-gray-50"
                }  `}
                onClick={() => setisLogin(true)}
              >
                Login
              </button>
              <button
                className={`mt-4 border-0 hover:scale-105 font-extrabold px-4 py-2 rounded ${
                  !isLogin ? "text-sky-500 bg-gray-900" : "text-gray-50"
                }`}
                onClick={() => setisLogin(false)}
              >
                Signup
              </button>
            </div>
            <div className="mt-4 ">{isLogin ? <Login /> : <Signup />}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Loginsignup;
