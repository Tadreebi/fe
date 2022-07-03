import axios from "axios";
// import store from "src/redux/store";

export const baseURL = process.env.BACKEND_URL || "http://localhost:8000/";

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    const { jwtToken } = store.getState().user;
    if (jwtToken) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default service;
