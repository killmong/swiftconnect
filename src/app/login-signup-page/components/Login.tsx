import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputField from "@/common/components/InputField";

const Login = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div>
      <div className="py-5">
        <h2 className="text-3xl font-bold text-black">Signin</h2>
        <div className="border-2 w-10 border-rose-600 inline-block mb-2"></div>
      </div>
      <div className="flex  flex-col justify-center  ">
        <div className="flex justify-center flex-row">
          <Link
            href="#"
            className="border-2 rounded-full p-3 mx-1 border-gray-200"
          >
            <FaFacebook className="text-md" />
          </Link>
          <Link
            href="#"
            className="border-2 rounded-full p-3 mx-1 border-gray-200 "
          >
            <FaLinkedin className="text-md" />
          </Link>
          <Link
            href="#"
            className="border-2 rounded-full p-3 mx-1 border-gray-200"
          >
            <FcGoogle className="text-md" />
          </Link>
        </div>
        <p className="text-gray-400">Or use your email account</p>
        <div className="flex w-full justify-center px-16 flex-col">
          <InputField
            type="email"
            label="email"
            name="email"
            control={control}
            placeholder="enter email"
          />
          <InputField
            type="password"
            label="password"
            name="password"
            control={control}
            placeholder="enter password"
          />

          <Link
            href="/homePage"
            className="border-2 rounded-full mt-5 font-semibold hover:bg-red-500 hover:text-gray-50 border-red-600   py-2 "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
