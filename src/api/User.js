import api from ".";

const path = "api/";

const login = params => {
  return api.get(`${path}token/`, { params });
};

const refresh = params => {
  return api.get(`${path}refresh/`, { params });
};

const regStudent = id => {
  return api.get(`${path}${id}`);
};

const regStaff = data => {
  return api.post(`${path}create/`, data);
};

const regCompany = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

export default {
  login,
  refresh,
  regStudent,
  regStaff,
  regCompany,
};
