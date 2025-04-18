import { useReducer, useEffect } from "react";
import apiService from "../services/apiService";

interface Cost {
  id: number;
  title: string;
  description: string;
  value: number;
  paymentDate: any;
  owner: string;
  summary: SummaryUserCost;
  active: boolean;
}

interface SummaryUserCost {
  TotalUsers: number;
  CountPaid: number;
  TotalPaid: number;
}

type State = {
  costs: any[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "START" }
  | { type: "SUCCESS"; payload: Cost[] }
  | { type: "ERROR"; payload: string };

const initialState: State = {
  costs: [],
  loading: false,
  error: null,
};

const costReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, costs: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useCostReducer = () => {
  const [state, dispatch] = useReducer(costReducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "START" });
      try {
        const costs = await apiService.get(
          "/cost/last?email=micael.ns@hotmail.com"
        );
        dispatch({ type: "SUCCESS", payload: costs.data });
      } catch (error: any) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    fetchUsers();
  }, []);

  return state;
};
