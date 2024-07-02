import React from "react";
export interface InputFieldprops {
  label: string;
  type: string;
  placeholder : string
}
const InputField: React.FC<InputFieldprops> = ({placeholder, label, type }) => {
  return (
    <div className="flex  flex-col py-2">
      <label className=" py-1 font-medium text-sm text-gray-50  font-[helvetica] ">{label}</label>
      <input type={type}  placeholder={placeholder} className=" px-4 lg:py-3  py-2 text-xs   border-2  rounded-md border-sky-600   text-black hover:border-sky-300    w-full outline-none   "/>
    </div>
  );
};
export default InputField;
