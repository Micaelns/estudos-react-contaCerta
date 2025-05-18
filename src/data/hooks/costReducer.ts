import { useReducer } from "react";
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

interface FormData {
  title: string;
  description?: string;
  value: number;
  paymentDate?: string;
  active: boolean;
  email?: string;
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
  const [stateCost, dispatchCost] = useReducer(costReducer, initialState);
  const [stateLast, dispatchLast] = useReducer(costReducer, initialState);
  const [stateNext, dispatchNext] = useReducer(costReducer, initialState);
  const [stateUserCosts, dispatchUserCosts] = useReducer(
    costReducer,
    initialState
  );
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

  const fetchUserCosts = async (costId: number) => {
    dispatchUserCosts({ type: "START" });
    try {
      const costs = await apiService.get("/cost/" + costId + "/users");
      dispatchUserCosts({ type: "SUCCESS", payload: costs.data });
    } catch (error: any) {
      dispatchUserCosts({ type: "ERROR", payload: error.message });
    }
  };

  const createCost = async (costData: FormData) => {
    dispatchCost({ type: "START" });
    try {
      costData.email = loggedUser?.email;
      const cost = await apiService.post("/cost", costData);
      dispatchCost({ type: "SUCCESS", payload: cost.data });
    } catch (error: any) {
      if (typeof error?.response?.data === "string") {
        dispatchCost({ type: "ERROR", payload: error.response.data });
      } else {
        dispatchCost({
          type: "ERROR",
          payload: "Ocorreu um erro interno, tente novamente em instantes",
        });
      }
    }
  };

  return {
    stateLast,
    fetchLastCosts,
    stateNext,
    fetchNextCosts,
    stateUserCosts,
    fetchUserCosts,
    stateCost,
    createCost,
  };
};
