import Layout from "@/components/organisms/Layout/Index";
import CostForm from "../../components/organisms/Forms/Cost/Index";

export default function CostPage() {
  const handleFormSubmit = (data: any) => {
    console.log("Dados do Formulário:", data);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Cadastro de Custo</h1>
        <CostForm onSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
}
