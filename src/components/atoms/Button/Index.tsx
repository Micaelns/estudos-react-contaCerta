import React from "react";
import { UseFormHandleSubmit } from "react-hook-form";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  onSubmit?: ReturnType<UseFormHandleSubmit<any>>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  disabled = false,
  onClick,
  onSubmit,
}) => {
  return (
    <button
      type={type}
      onClick={type === "submit" && onSubmit ? onSubmit : onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg 
                  hover:bg-blue-700 transition duration-200
                  disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
};

export default Button;
