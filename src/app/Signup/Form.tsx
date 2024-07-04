import React from "react";
import { Wizard } from "react-use-wizard";
import { UserContext } from "@/common/components/UserContext";
import SignupStep from "./SignupStep";
import ProfileUploadStep from "./ProfileUploadStep";
import { useSignupForm } from "./useSignupForm";

const SignupWizard: React.FC = () => {
  const form = useSignupForm();

    function handleSubmit(values: { fullname: string; email: string; password: string; Gender: string; username: string; Mobile: string; Profile: string; }, isValid: boolean): void {
        throw new Error("Function not implemented.");
    }

    function handleReset(values: { fullname: string; email: string; password: string; Gender: string; username: string; Mobile: string; Profile: string; }): void {
        throw new Error("Function not implemented.");
    }

  return (
    
    <UserContext>
    <form
    onReset={form.handleReset(handleReset)}
    onSubmit={form.handleSubmit(handleSubmit)}
     >
      <Wizard>
        <SignupStep />
        <ProfileUploadStep />
      </Wizard>
    </form>
    
    </UserContext>
  );
};

export default SignupWizard;
