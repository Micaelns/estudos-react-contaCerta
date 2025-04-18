import { useReducer, useEffect } from "react";
import apiService from "../services/apiService";

interface User {
  nickname: string;
  email: string;
  active: boolean;
}

type State = {
  users: any[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "START" }
  | { type: "SUCCESS"; payload: User[] }
  | { type: "ERROR"; payload: string };

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUserReducer = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "START" });
      try {
        const users = await apiService.get("/users/actives");
        dispatch({ type: "SUCCESS", payload: users.data });
      } catch (error: any) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    fetchUsers();
  }, []);

  return state;
};
