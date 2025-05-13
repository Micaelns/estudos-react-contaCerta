import { useState } from "react";
import apiService from "./apiService";

export const authService = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const authenticate = async (email: string, password: string) => {
    setLoginError("");
    try {
      logoff();
      const dataUser = await apiService.post("/auth/login", {
        email,
        password,
      });
      setLoggedUser(dataUser.data);
    } catch (error: any) {
      if (typeof error?.response?.data === "string") {
        setLoginError(error?.response?.data);
      } else if (error?.message == "Network Error") {
        setLoginError("Erro de comunicação com Api!");
      } else {
        setLoginError("Erro ao tentar fazer login!");
      }
    }
  };

  const logoff = () => {
    setLoggedUser(null);
    setLoginError("");
  };

  return { authenticate, logoff, loginError, loggedUser };
};
