import axios from "axios";
export const baseUrl = "http://localhost:8000";
export const frontUrl = "http://localhost:3000";
export const instance = axios.create({
  baseURL: `${baseUrl}/`,
});
