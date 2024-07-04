import { createForm } from "@use-form/use-form";

export const useSignupForm = createForm({
  initialValues: {
    fullname: "",
    email: "abc@example.com",
    password: "",
    Gender: "",
    username: "",
    Mobile: "",
    Profile: "",
  },
});

