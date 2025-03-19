import React from "react";
import UserForm from "../../components/organisms/Forms/User/Index";
import Layout from "@/components/organisms/Layout/Index";

const UserPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Cadastro de Usuário</h1>
        <UserForm />
      </div>
    </Layout>
  );
};

export default UserPage;
