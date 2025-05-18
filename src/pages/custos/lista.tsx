import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";
import ElementCost from "@/components/molecules/Cost/Index";
import { useCostReducer } from "../../data/hooks/costReducer";
import { useEffect, useState } from "react";
import ElementTab from "@/components/organisms/Tab/Index";
import Modal from "@/components/molecules/Modal/Index";
import ElementUserCost from "@/components/molecules/UserCost/Index";

export default function UserListPage() {
  const {
    stateLast,
    fetchLastCosts,
    stateNext,
    fetchNextCosts,
    stateUserCosts,
    fetchUserCosts,
  } = useCostReducer();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchLastCosts();
    fetchNextCosts();
  }, []);

  const detailsCost = (idCost: number) => {
    fetchUserCosts(idCost);
    setIsOpen(true);
  };

  const lastElements = () => {
    return (
      <ElementList loading={stateLast.loading} error={stateLast.error}>
        {stateLast.costs?.map((element) => (
          <ElementCost
            key={element.title || element.paymentDate}
            {...element}
            onClick={detailsCost}
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
            onClick={detailsCost}
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
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Detalhes</h2>
          <div className="flex">
            <ElementList
              loading={stateUserCosts.loading}
              error={stateUserCosts.error}
            >
              {stateUserCosts.costs?.map((element) => (
                <ElementUserCost key={element.email} {...element} />
              ))}
            </ElementList>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
