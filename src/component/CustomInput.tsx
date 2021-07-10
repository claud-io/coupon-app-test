import React from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  onChange: any;
  value: any;
  required: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="col-span-3 sm:col-span-2">
      <label htmlFor={id} className="block text-xl font-medium text-gray-700">
        {label}
      </label>
      <input
        className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-8"
        type={type}
        id={id}
        value={value || ""}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
