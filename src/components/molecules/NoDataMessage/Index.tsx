import { FaExclamationCircle } from "react-icons/fa";

interface NoDataMessageProps {
  message?: string;
}

export default function NoDataMessage({ message }: NoDataMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-md shadow-md bg-gray-100 w-64">
      <FaExclamationCircle className="size-14 text-gray-500 mb-2" />
      <div className="text-sm font-semibold text-gray-700">
        {message ?? "Não existe nenhum elemento!"}
      </div>
    </div>
  );
}
