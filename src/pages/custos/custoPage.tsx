import Layout from "@/components/organisms/Layout/Index";
import CostForm from "../../components/organisms/Forms/Cost/Index";
import { useCostReducer } from "../../data/hooks/costReducer";
import Loading from "@/components/atoms/Loading/Index";
import { useState } from "react";

interface FormData {
  title: string;
  description?: string;
  value: number;
  paymentDate?: string;
  active: boolean;
}

export default function CostPage() {
  const { stateCost, createCost } = useCostReducer();
  const [resetFormSignal, SetResetFormSignal] = useState(0);

  const handleFormSubmit = async (data: any) => {
    await createCost(data);
    if (stateCost.loading == false && stateCost.error == null) {
      SetResetFormSignal((prev) => prev + 1);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Cadastro de Custo</h1>
        <CostForm
          onSubmit={handleFormSubmit}
          resetFormSignal={resetFormSignal}
        />
        {stateCost.loading ? <Loading /> : stateCost.error}
      </div>
    </Layout>
  );
}
