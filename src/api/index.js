import axios from "axios";
import store from "src/store";

export const baseURL = process.env.BACKEND_URL || "https://tadreebi-backend.herokuapp.com/";

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    const JWT = store.getState().JWT;
    if (JWT) {
      config.headers["Authorization"] = `Bearer ${JWT}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default service;
