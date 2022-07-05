import api from ".";

const path = "token/";

const login = params => {
  return api.post(`${path}api/token/`, { params });
};

const refresh = params => {
  return api.post(`${path}api/token/refresh/`, { params });
};

const regStudent = data => {
  return api.post(`${path}accounts/signup/student`, data);
};

const regStaff = data => {
  return api.post(`${path}accounts/signup/university`, data);
};

const regCompany = data => {
  return api.post(`${path}accounts/signup/company`, data);
};

const getStudent = username => {
  return api.get(`${path}accounts/student/${username}/`);
};

const getStaff = username => {
  return api.post(`${path}accounts/university/${username}/`);
};

const getCompany = username => {
  return api.put(`${path}accounts/company/${username}/`);
};

export default {
  login,
  refresh,
  regStudent,
  regStaff,
  regCompany,
  getStudent,
  getStaff,
  getCompany
};
