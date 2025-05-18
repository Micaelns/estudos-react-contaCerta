import Menu from "@/components/molecules/Menu/Index";
import Login from "@/components/organisms/Login";
import { useAuth } from "@/data/contexts/authContext";

export default function Layout(props: any) {
  const { loggedUser } = useAuth();
  // return loggedUser ? <Layout>Micael Souza</Layout> : <Login />;
  return (
    <div className="h-screen flex">
      <div className="w-full flex flex-col items-center">
        <div className="bg-gray-100 w-11/12">{loggedUser ? <Menu /> : ""}</div>
        {loggedUser ? (
          <div className="bg-gray-100 w-11/12 p-2 overflow-auto h-screen">
            {props.children}
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
