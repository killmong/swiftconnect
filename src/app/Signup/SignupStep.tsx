"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "@/common/components/InputField";
import { useWizard } from "react-use-wizard";
import { useContext } from "react";
import { Context } from "@/common/components/UserContext";

const SignupStep: React.FC = () => {
  const { updateUserDetails, userDetails } = useContext(Context);
  const { nextStep } = useWizard();
  const { control, handleSubmit } = useForm({
    defaultValues: userDetails || {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    updateUserDetails(data);
    nextStep();
  };

  return (
    <form  className="lg:px-32 px-3">
      <div className="flex flex-col">
        <Controller
          name="fullname"
          control={control}
          render={({ field }) => (
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter full Name"
              control={control}
              {...field}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <InputField
              label="Username"
              type="text"
              placeholder="Create username"
              control={control}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              label="Email"
              type="email"
              placeholder="Enter email"
              control={control}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              label="Password"
              type="password"
              placeholder="Create password"
              control={control}
              {...field}
            />
          )}
        />
        <button
        onClick={handleSubmit(onSubmit)}
          type="submit"
          className="custom-font text-gray-50 text-base py-2 lg:py-3 custom-font lg:my-4 w-full rounded-md bg-sky-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SignupStep;
