import { useUserReducer } from "@/data/hooks/userReducer";
import UserForm from "../../components/organisms/Forms/User/Index";
import Layout from "@/components/organisms/Layout/Index";
import Loading from "@/components/atoms/Loading/Index";
import { useState } from "react";

export default function UserPage() {
  const { stateCreate, createUser } = useUserReducer();
  const [resetFormSignal, SetResetFormSignal] = useState(0);

  const handleFormSubmit = async (data: any) => {
    console.log("Dados do Formulário:", data);
    await createUser(data);
    if (stateCreate.loading == false && stateCreate.error == null) {
      console.log("entrou aqui");
      SetResetFormSignal((prev) => prev + 1);
    }
  };
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Cadastro de Usuário</h1>
        <UserForm
          onSubmit={handleFormSubmit}
          resetFormSignal={resetFormSignal}
        />
        {stateCreate.loading ? <Loading /> : stateCreate.error}
      </div>
    </Layout>
  );
}
