// Vendors
import axios from "axios";

// Configs
import { config as Configs } from "../config";

// Axios Clients
const publicClient: Axios.AxiosInstance = axios.create({
  baseURL: "https://api.tu-dominio.com", // Cambia esto a tu URL base
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const privateClient: Axios.AxiosInstance = axios.create({
  baseURL: "https://api.tu-dominio.com", // Cambia esto a tu URL base
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors (Private Client)
privateClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(Configs.accessToken);
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No se encontró un token de autenticación.");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { publicClient, privateClient };
