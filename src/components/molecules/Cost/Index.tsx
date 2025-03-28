import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface ElementProps {
  title: string;
  value: string;
  paymentDate?: string;
  active: boolean;
}

export default function ElementCost({
  title,
  value,
  paymentDate,
  active,
}: ElementProps) {
  return (
    <div className="p-4 border rounded-lg w-56 shadow-md bg-white flex flex-col items-center">
      <div className="text-sm font-bold text-gray-800 text-center">{title}</div>

      <div className="flex items-center justify-center mb-2">
        {active ? (
          <FaCheckCircle className="size-16 text-green-500" />
        ) : (
          <FaTimesCircle className="size-16 text-gray-400" />
        )}
      </div>
      <div className="text-sm text-gray-700 font-semibold">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </div>
      {paymentDate && (
        <div className="text-xs text-gray-600">
          {new Date(paymentDate).toLocaleDateString("pt-BR")}
        </div>
      )}

      {!paymentDate && (
        <div className="text-xs text-gray-600">Sem previsão</div>
      )}

      <div
        className={`mt-2 px-2 py-1 text-xs font-bold rounded-md ${
          active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
        }`}
      >
        {active ? "Ativo" : "Inativo"}
      </div>
    </div>
  );
}
