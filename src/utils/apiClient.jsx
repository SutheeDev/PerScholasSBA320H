import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
});

export default apiClient;
