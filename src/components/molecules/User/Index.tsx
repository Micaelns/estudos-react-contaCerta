import { FaUserCheck, FaUserSlash } from "react-icons/fa";

interface ElementProps {
  nick: string;
  email: string;
  active: boolean;
}

export default function ElementUser({ nick, email, active }: ElementProps) {
  return (
    <div className="p-2 border rounded-md w-64 shadow-sm bg-white flex flex-col items-center">
      <div className="flex items-center justify-center mb-1">
        {active ? (
          <FaUserCheck className="size-14 text-green-500" />
        ) : (
          <FaUserSlash className="size-14 text-gray-500" />
        )}
      </div>
      <div className="text-sm font-semibold text-gray-800">{nick}</div>
      <div className="text-xs text-gray-600">{email}</div>
      <div
        className={`mt-1 text-[10px] font-semibold ${
          active ? "text-green-600" : "text-red-500"
        }`}
      >
        {active ? "Ativo" : "Inativo"}
      </div>
    </div>
  );
}
