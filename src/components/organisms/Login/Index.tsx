import { useState } from "react";
import InputField from "@/components/atoms/InputField/Index";
import Loading from "@/components/atoms/Loading/Index";
import { useAuth } from "@/data/contexts/authContext";

export default function Login() {
  const { authenticate, loginError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await authenticate(username, password);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-100 p-4 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 max-w-xs mx-auto mt-4"
        >
          <span className="flex justify-center">Bem vindo!</span>
          <InputField
            id="email"
            label="E-mail"
            type="email"
            required={true}
            placeholder="Digite seu email"
            value={username}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            id="senha"
            label="Senha"
            type="password"
            required={true}
            placeholder="Digite sua senha"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Entrar
          </button>
          {loginError && (
            <div className="text-red-600 text-sm">{loginError}</div>
          )}
          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
