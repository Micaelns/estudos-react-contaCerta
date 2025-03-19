import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  register: any; // Ajustamos para aceitar o register do react-hook-form
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className="border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
