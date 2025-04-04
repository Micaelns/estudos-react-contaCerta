import UserForm from "../../components/organisms/Forms/User/Index";
import Layout from "@/components/organisms/Layout/Index";

export default function UserPage() {
  const handleFormSubmit = (data: any) => {
    console.log("Dados do Formulário:", data);
  };
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Cadastro de Usuário</h1>
        <UserForm onSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
}
