"use client";
import Container from "@/common/components/Container";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);

  const handleSignup = () => {
    setIsLogin(false);
    setIsSignup(true);
  };

  const handleLogin = () => {
    setIsSignup(false);
    setIsLogin(true);
  };

  return (
    <div className="background flex flex-col justify-items-center flex-1 px-4 lg:pt-24 md:px-20 text-center w-full login-signup-page">
      <Container>
        <div
          className={`container bg-gray-50 md:m-auto  ${
            isSignup ? "right-panel-active" : ""
          }`}
        >
          <div className="bg-gray-50 rounded-2xl md:m-auto lg:shadow-2xl flex w-full max-w-4xl">{isLogin && <Login />}</div>
          <div className="bg-gray-50 rounded-2xl md:m-auto lg:shadow-2xl flex justify-end w-full max-w-4xl ">{isSignup && <Signup />}</div>
          <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100">
            <div className="overlay bg-gradient-to-r from-pink-500 to-red-500 bg-cover bg-no-repeat bg-center text-white relative left-[-100%] h-full w-[200%] transform transition-transform duration-600 ease-in-out lg:transform-gpu">
              <div className="overlay-panel overlay-left absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center text-center px-10 transition-transform duration-600 ease-in-out lg:transform-gpu">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost bg-transparent border-2 border-white text-white py-2 px-8 rounded-full"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right absolute top-0 right-0 h-full w-1/2 flex flex-col items-center justify-center text-center px-10 transition-transform duration-600 ease-in-out lg:transform-gpu">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="ghost bg-transparent border-2 border-white text-white py-2 px-8 rounded-full"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Loginsignup;
