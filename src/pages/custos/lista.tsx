import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";
import ElementCost from "@/components/molecules/Cost/Index";
import { useCostReducer } from "../../data/hooks/costReducer";
import { useEffect } from "react";
import ElementTab from "@/components/organisms/Tab/Index";

export default function UserListPage() {
  const { stateLast, fetchLastCosts, stateNext, fetchNextCosts } =
    useCostReducer();

  useEffect(() => {
    fetchLastCosts();
    fetchNextCosts();
  }, []);

  const lastElements = () => {
    return (
      <ElementList loading={stateLast.loading} error={stateLast.error}>
        {stateLast.costs?.map((element) => (
          <ElementCost
            key={element.title || element.paymentDate}
            {...element}
          />
        ))}
      </ElementList>
    );
  };

  const nextElements = () => {
    return (
      <ElementList loading={stateNext.loading} error={stateNext.error}>
        {stateNext.costs?.map((element) => (
          <ElementCost
            key={element.title || element.paymentDate}
            {...element}
          />
        ))}
      </ElementList>
    );
  };

  const elements = [
    {
      label: "Custos Antigos",
      content: lastElements(),
    },
    {
      label: "Próximos Custos",
      content: nextElements(),
    },
  ];

  return (
    <Layout>
      <div>
        <ElementTab tabs={elements} initialIndex={1} />
      </div>
    </Layout>
  );
}
