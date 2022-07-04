import axios from "axios";
// import store from "src/redux/store";

export const baseURL = process.env.BACKEND_URL || "http://localhost:8000/";

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    // const { jwtToken } = store.getState().user;
    // if (jwtToken) {
    //   config.headers["Authorization"] = `Bearer ${jwtToken}`;
    // }

    // const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NzAxOTMwMSwiaWF0IjoxNjU2OTMyOTAxLCJqdGkiOiIzOTRjZDk1NjljOTE0NDA1ODE5NDAzNzE2ZWY4ZGFmMiIsInVzZXJfaWQiOjJ9.EgVmUZ-Wmlv9heH7M9A97dD9rteXYFrqjhemBGI52jE";
    // if (jwtToken) {
    //   config.headers["Authorization"] = `Bearer ${jwtToken}`;
    // }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default service;
