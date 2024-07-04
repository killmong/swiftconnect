import React from "react";
import { useController, Control } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  control: Control<any>; // Ensure control is required
  trigger?: () => void;
  error?: string;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  type,
  name,
  control,
  trigger,
}) => {
  if (!control) {
    throw new Error(`Control is undefined for input field ${name}`);
  }

  const { field, fieldState } = useController({ name, control });

  return (
    <div className="flex flex-col py-2">
      <label className="py-1 font-medium text-left text-sm text-black font-[helvetica]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        onChange={(event) => {
          field.onChange(event);
          trigger && trigger();
        }}
        className="px-4 lg:py-3 py-2 text-xs border-2 rounded-md border-sky-600 text-black hover:border-sky-300 w-full outline-none"
      />
      {fieldState?.error?.message && (
        <p className="pl-4 pt-1 text-xs text-error">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
