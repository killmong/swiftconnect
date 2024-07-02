'use client'
import InputField from "@/common/components/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <form className="flex flex-col justify-center lg:px-32  ">
      <InputField label="email" type="email" placeholder="Enter email" />

      <InputField label="password" type="Password" placeholder="Enter  password" />

      <button type='button' onClick={()=> router.push('/homePage') } className="text-gray-50  text-base mt-10 py-3 my-2 w-full rounded-md  bg-sky-500">
        Login
      </button>
      <Link
        href="/reset-password"
        className="text-center reset-password  lg:mb-32 lg:text-right  text-gray-500 "
      >
        Forgot your password?
      </Link>
    </form>
  );
};
export default Login;
