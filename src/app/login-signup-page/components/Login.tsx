"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import InputField from "@/common/components/InputField";
import { toast } from "react-toastify";

const Login = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onSignin = async (data: any) => {
  try {
    const response = await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is OK before parsing it as JSON
     if (!response.ok) {
      const result = await response.json();
      console.error("Signin failed:", result);
      toast.error("Error! Login failed");
      return;
    }

    const result = await response.json();
    console.log(result);

    router.push("/homePage");
    toast.success("Login Successful");
  } catch (error: any) {
    console.error("Signin failed", error.message);
    toast.error("Unknown error!");
  }
};
return (
    <div>
      <div className="py-5">
        <h2 className="text-3xl font-bold text-black">Signin</h2>
        <div className="border-2 w-10 border-rose-600 inline-block mb-2"></div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center flex-row">
          <Link
            href="#"
            className="border-2 rounded-full p-3 mx-1 border-gray-200"
          >
            <FaFacebook className="text-md" />
          </Link>
          <Link
            href="#"
            className="border-2 rounded-full p-3 mx-1 border-gray-200"
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
          <form >
            <InputField
              type="email"
              label="Email"
              name="email"
              control={control}
              placeholder="Enter email"
              required={true}
            />
            <InputField
              type="password"
              label="Password"
              name="password"
              control={control}
              placeholder="Enter password"
              required={true}
            />
            <button onClick={handleSubmit(onSignin)}
              type="submit"
              className="border-2 rounded-full mt-5 px-3 w-full font-semibold hover:bg-[#964734] hover:text-gray-50 border-[#964734]   py-2 " >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
