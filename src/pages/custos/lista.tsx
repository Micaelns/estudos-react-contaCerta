import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";
import ElementCost from "@/components/molecules/Cost/Index";
import { useCostReducer } from "../../data/hooks/costReducer";

export default function UserListPage() {
  const { costs, loading, error } = useCostReducer();

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-bold mb-4">Lista de Custos</h1>
        <ElementList loading={loading} error={error}>
          {costs?.map((element) => (
            <ElementCost
              key={element.title || element.paymentDate}
              {...element}
            />
          ))}
        </ElementList>
      </div>
    </Layout>
  );
}
