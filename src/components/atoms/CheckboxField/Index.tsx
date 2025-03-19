import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxFieldProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  register,
}) => {
  return (
    <div className="flex items-center">
      <input id={id} type="checkbox" {...register} className="mr-2" />
      <label htmlFor={id} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
