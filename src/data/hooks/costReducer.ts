import { useReducer, useEffect } from "react";
import apiService from "../services/apiService";
import { useAuth } from "../contexts/authContext";

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
  const [stateLast, dispatchLast] = useReducer(costReducer, initialState);
  const [stateNext, dispatchNext] = useReducer(costReducer, initialState);
  const { loggedUser } = useAuth();

  const fetchLastCosts = async () => {
    dispatchLast({ type: "START" });
    try {
      const costs = await apiService.get(
        "/cost/last?email=" + loggedUser?.email
      );
      dispatchLast({ type: "SUCCESS", payload: costs.data });
    } catch (error: any) {
      dispatchLast({ type: "ERROR", payload: error.message });
    }
  };

  const fetchNextCosts = async () => {
    dispatchNext({ type: "START" });
    try {
      const costs = await apiService.get(
        "/cost/next?email=" + loggedUser?.email
      );
      dispatchNext({ type: "SUCCESS", payload: costs.data });
    } catch (error: any) {
      dispatchNext({ type: "ERROR", payload: error.message });
    }
  };

  return { stateLast, fetchLastCosts, stateNext, fetchNextCosts };
};
