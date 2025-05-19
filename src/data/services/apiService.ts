import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_URL_API_CONTACERTA;

const api = axios.create({
  baseURL: apiUrl,
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
