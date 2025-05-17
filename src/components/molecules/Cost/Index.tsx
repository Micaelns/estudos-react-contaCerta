import {
  FaMoneyCheckAlt,
  FaUser,
  FaRegCalendarCheck,
  FaInfoCircle,
  FaPlus,
} from "react-icons/fa";

interface ElementProps {
  id: number;
  title: string;
  description: string;
  value: number;
  paymentDate: any;
  owner: string;
  summary: SummaryUserCost;
  active: boolean;
  onClick: (idCost: number) => void;
}

interface SummaryUserCost {
  TotalUsers: number;
  CountPaid: number;
  TotalPaid: number;
}

export default function ElementCost({
  id,
  title,
  description,
  value,
  paymentDate,
  owner,
  summary,
  active,
  onClick,
}: ElementProps) {
  return (
    <div className="p-3 border rounded-md w-72 shadow-sm bg-white flex flex-col items-center">
      <div className="w-full flex justify-end">
        <div
          className="group flex items-center space-x-1 cursor-pointer"
          onClick={() => (onClick !== undefined ? onClick(id) : "")}
        >
          <small className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Detalhar
          </small>
          <FaPlus className="text-gray-400" />
        </div>
      </div>

      <div className="mb-2">
        <FaMoneyCheckAlt
          className={`size-14 ${active ? "text-green-500" : "text-gray-400"}`}
        />
      </div>

      <div className="text-sm font-semibold text-gray-800 text-center">
        {title}
      </div>

      {description && (
        <div className="text-[11px] italic text-gray-600 text-center mb-1">
          {description}
        </div>
      )}
      <div className="text-xs mt-2 text-gray-600 flex items-center gap-1">
        <FaInfoCircle className="text-gray-500" />
        Pago: R$ {summary.totalPaid.toFixed(2)} ({" "}
        {((summary.countPaid / summary.totalUsers) * 100).toFixed(2)}% ){" "}
      </div>

      <div className="text-xs text-gray-600 flex items-center gap-1">
        <FaUser className="text-gray-500" />
        {owner}
      </div>

      <div className="text-xs text-gray-600 flex items-center gap-1">
        <FaRegCalendarCheck className="text-gray-500" />
        {paymentDate ?? "Sem data"}
      </div>

      <div className="text-xs font-semibold text-gray-700 mt-1">
        Valor: R$ {value.toFixed(2)}
      </div>

      <div
        className={`mt-2 text-[10px] font-semibold ${
          active ? "text-green-600" : "text-red-500"
        }`}
      >
        {active ? "Ativo" : "Inativo"}
      </div>
    </div>
  );
}
