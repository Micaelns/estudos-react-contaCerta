import { FaExclamationCircle } from "react-icons/fa";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (message == "Network Error") {
    message = "Ocorreu um erro inesperado!";
  }
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-red-300 rounded-md shadow-md bg-red-100 w-64">
      <FaExclamationCircle className="size-12 text-red-500 mb-2" />
      <div className="text-sm font-semibold text-red-700 text-center">
        {message}
      </div>
    </div>
  );
}
