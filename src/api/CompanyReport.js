import api from ".";

const path = "company-reports/";

//// Responses
const getAllReports = params => {
  return api.get(`${path}`, { params });
};

const getReport = id => {
  return api.get(`${path}${id}`);
};

const createReport = data => {
  return api.post(`${path}create/`, data);
};

const updateReport = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteReport = id => {
  return api.delete(`${path}delete/${id}`);
};


export default {
  getAllReports,
  getReport,
  createReport,
  updateReport,
  deleteReport,
};
