import Layout from "@/components/organisms/Layout/Index";
import Login from "@/components/organisms/Login";
import { useAuth } from "@/data/contexts/authContext";

export default function Home() {
  const { loggedUser } = useAuth();
  return loggedUser ? <Layout>Micael Souza</Layout> : <Login />;
}
