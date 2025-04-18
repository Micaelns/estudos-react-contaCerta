import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7090",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  get: async (uri: string) => {
    const response = await api.get(uri);
    return response.data;
  },
  post: async (uri: string, data: any) => {
    const response = await api.post(uri, data);
    return response.data;
  },
  put: async (uri: string, data: any) => {
    const response = await api.put(uri, data);
    return response.data;
  },
  delete: async (uri: string) => {
    const response = await api.delete(uri);
    return response.data;
  },
};

export default apiService;
