import api from ".";

const path = "opportunity-applications/"; 

//// Applications
const getAllApplications = params => {
  return api.get(`${path}applications/`, { params });
};

const getApplication = id => {
  return api.get(`${path}applications/${id}`);
};

const createApplication = data => {
  return api.post(`${path}applications/create/`, data);
};

const updateApplication = (id, data) => {
  return api.put(`${path}applications/update/${id}`, data);
};

const deleteApplication = id => {
  return api.delete(`${path}applications/delete/${id}`);
};


//// Responses
const getAllResponses = params => {
  return api.get(`${path}responses/`, { params });
};

const getResponse = id => {
  return api.get(`${path}responses/${id}`);
};

const createResponse = data => {
  return api.post(`${path}responses/create/`, data);
};

const updateResponse = (id, data) => {
  return api.put(`${path}responses/update/${id}`, data);
};

const deleteResponse = id => {
  return api.delete(`${path}responses/delete/${id}`);
};




export default {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  getAllResponses,
  getResponse,
  createResponse,
  updateResponse,
  deleteResponse,
};
