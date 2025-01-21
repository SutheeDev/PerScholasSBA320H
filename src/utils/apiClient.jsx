import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": API_KEY,
  },
});
