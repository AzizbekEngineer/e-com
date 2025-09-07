import axios, { type AxiosInstance } from "axios";

// .env dagi qiymatni olamiz
const baseURL = import.meta.env.VITE_API_URL as string;

const apiUrl: AxiosInstance = axios.create({
  baseURL,
});

export default apiUrl;
