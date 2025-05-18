import { FaUserCheck, FaUserSlash } from "react-icons/fa";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { Tooltip } from "@mui/material";

interface User {
  nickname: string;
  email: string;
  active: boolean;
}
interface ElementProps {
  user: User;
  value: number;
  paid_at?: string;
  paid: boolean;
}
export default function ElementUserCost({
  user,
  value,
  paid_at,
  paid,
}: ElementProps) {
  return (
    <div className="p-3 border rounded-lg w-48 shadow-md bg-white flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {user.active ? (
          <FaUserCheck className="text-green-500 w-8 h-8" />
        ) : (
          <FaUserSlash className="text-gray-400 w-8 h-8" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">
            {user.nickname}
          </span>
          <span className="text-xs text-gray-600">{user.email}</span>
        </div>
      </div>

      <div className="text-xs flex justify-between items-center">
        <span className="text-gray-800 font-semibold">
          R$ {value.toFixed(2)}
        </span>
        <Tooltip title={paid ? "Pago" : "Pendente"} arrow>
          {paid ? (
            <HiCheckCircle className="text-green-500 w-5 h-5" />
          ) : (
            <HiXCircle className="text-red-400 w-5 h-5" />
          )}
        </Tooltip>
      </div>

      <span className="text-[10px] text-center text-gray-500">{paid_at}</span>
    </div>
  );
}
