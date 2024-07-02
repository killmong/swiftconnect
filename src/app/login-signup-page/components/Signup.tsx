import React, { useState } from 'react';
import InputField from "@/common/components/InputField";
import { useRouter } from "next/navigation";

const Signup: React.FC = () => {
    const router = useRouter();
  return (
    <form className="lg:px-32 px-3">
      <div className="flex flex-col">
        <InputField
          label="full-Name"
          type="text"
          placeholder="Enter full Name"
        />
        <InputField
          label="username"
          type="text"
          placeholder="Create username"
        />

        <InputField label="e-mail" type="email" placeholder="Enter email" />
        <InputField
          label="password"
          type="password"
          placeholder="Create password"
        />
        <button 
          type="button" 
          className="custom-font text-gray-50 text-base py-2 lg:py-3 custom-font lg:my-4 w-full rounded-md bg-sky-500"
        >
          Next
        </button>    
      </div>  
    </form>
  );
};

export default Signup;
