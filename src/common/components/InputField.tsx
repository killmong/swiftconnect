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
  required?: boolean;
  pattern?: { value: RegExp; message: string }; // Pattern validation prop
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  type,
  name,
  control,
  required,
  trigger,
  pattern,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      required: required ? "This field is required" : false,
      pattern: pattern ? pattern : undefined,
    },
  });

  return (
    <div className="flex flex-col py-2">
      <label className="py-1 font-medium text-left text-sm text-black font-[helvetica]">
        {label}
      </label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        {...field}
        onChange={(event) => {
          field.onChange(event);
          trigger && trigger();
          event.target.value
        }}
        className="px-4 lg:py-3 py-2 text-xs border-2 rounded-md border-sky-500 text-black hover:border-sky-400 w-full outline-none"
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
