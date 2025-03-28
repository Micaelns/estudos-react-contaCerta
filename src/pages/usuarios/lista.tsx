import ElementUser from "@/components/molecules/User/Index";
import ElementList from "../../components/organisms/List/Index";
import Layout from "@/components/organisms/Layout/Index";

export default function UserListPage() {
  const elementsUsers1 = [];
  const elementsUsers = [
    { nick: "Micael Nunes de Souza", email: "Item1@gmail.com", active: true },
    { nick: "Micael Souza", email: "Item2asas@gmailsss.com.br", active: false },
    { nick: "Micael 3", email: "Item3@gmail.com", active: true },
    { nick: "Micael 4", email: "Item4@gmail.com", active: false },
    { nick: "Micael 5", email: "Item5**********", active: true },
    { nick: "Micael 6", email: "Item6@gmail.com", active: false },
    { nick: "Micael 7", email: "Item7**********", active: true },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-bold mb-4">Lista de Usuários</h1>
        <ElementList>
          {elementsUsers?.map((element) => (
            <ElementUser key={element.email} {...element} />
          ))}
        </ElementList>
      </div>
    </Layout>
  );
}
