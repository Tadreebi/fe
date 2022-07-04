import axios from "axios";
// import store from "src/redux/store";

export const baseURL = process.env.BACKEND_URL || "http://localhost:8000/";

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    const { jwtToken } = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2OTMzNjc1LCJpYXQiOjE2NTY5MzMzNzUsImp0aSI6ImM5ZGQzMzY3YjA2NTQzMDg4NDk3MDZhNGY2ODcyOWYxIiwidXNlcl9pZCI6MX0.6nToRdjqXC9LP7TWoOdIjwDLLuTdwkPaJNfM91nAJjg";
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
