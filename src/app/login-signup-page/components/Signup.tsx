"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/common/components/InputField";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Context } from "@/common/components/UserContext";

const Signup = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const {updateUserDetails} = useContext(Context)

  const onSignup = async (data: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        updateUserDetails(data);
        router.push("/homePage");
        toast.success("Signup Successful!")
      } else {
        console.error("Signup failed:", result);
        toast.error("username or email already!")
      }
    } catch (error: any) {
      console.error("Signup failed", error.message);
      toast.error("Signup Failed! Unknown error")
    }
  };

  return (
    <div>
      <div className="py-5">
        <h2 className="text-3xl font-bold text-black">Sign Up</h2>
      </div>
      <p className="text-gray-400">Use your email account</p>
      <div className="flex w-full justify-center px-16 flex-col">
        <InputField
          type="text"
          label="username"
          name="username"
          control={control}
          placeholder="Enter username"
          required={true}
          pattern={{
            value: /^[A-Za-z0-9_]{3,15}$/,
            message:
              "Username must be 3-15 characters and can only include letters, numbers, and underscores.",
          }}
        />
        <InputField
          type="email"
          label="email"
          name="email"
          control={control}
          placeholder="Enter email"
          required={true}
          pattern={{
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email format.",
          }}
        />
        <InputField
          type="password"
          label="password"
          name="password"
          control={control}
          placeholder="Enter password"
          required={true}
          pattern={{
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain at least one letter and one number.",
          }}
        />
        <button
          onClick={handleSubmit(onSignup)}
          className="border-2 rounded-full mt-5 font-semibold hover:bg-[#964734] hover:text-gray-50 border-[#964734] py-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
