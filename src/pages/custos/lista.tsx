import ElementUser from "@/components/molecules/User/Index";
import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";
import ElementCost from "@/components/molecules/Cost/Index";

export default function UserListPage() {
  const elementsCosts1 = [];
  const elementsCosts = [
    {
      title: "Pagamento1",
      value: "49.95",
      paymentDate: "03/04/2025",
      active: true,
    },
    {
      title: "Pagamento2",
      value: "88.00",
      paymentDate: "08/04/2025",
      active: true,
    },
    {
      title: "Pagamento3",
      value: "249.99",
      paymentDate: "18/04/2025",
      active: false,
    },
    {
      title: "Pagamento4",
      value: "300.00",
      paymentDate: "",
      active: true,
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-bold mb-4">Lista de Custos</h1>
        <ElementList>
          {elementsCosts?.map((element) => (
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
