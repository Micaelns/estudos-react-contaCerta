import { createContext, useContext } from "react";
import { authService } from "../services/authService";

interface User {
  nickname: string;
  email: string;
  active: boolean;
}

interface AuthContextType {
  loggedUser: User | null;
  loginError: string;
  authenticate: (email: string, password: string) => Promise<void>;
  logoff: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: any) {
  return (
    <AuthContext.Provider value={authService()}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve estar dentro de AuthProvider");
  return context;
}
