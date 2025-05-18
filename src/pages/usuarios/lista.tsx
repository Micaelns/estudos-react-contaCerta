import ElementUser from "@/components/molecules/User/Index";
import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";
import { useUserReducer } from "../../data/hooks/userReducer";

export default function UserListPage() {
  const { state, createUser } = useUserReducer();
  return (
    <Layout>
      <div>
        <h1 className="text-xl font-bold mb-4">Lista de Usuários</h1>
        <ElementList loading={state.loading} error={state.error}>
          {state.users?.map((element) => (
            <ElementUser key={element.nickname} {...element} />
          ))}
        </ElementList>
      </div>
    </Layout>
  );
}
