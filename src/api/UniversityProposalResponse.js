import api from ".";

const path = "university/proposals-response/"; // To EXACTLY MATCH the relevant URL in BE file of "tadreebi/urls.py"

// List all urls of BE's "app/urls/StudentReport.py"

//// Reports
const getAllResponses = params => { // Don't forget to export it in the bottom of this file
  return api.get(`${path}`, { params }); // To EXACTLY MATCH the relevant URL in BE file of "app/urls/StudentReport.py"
};

const getResponse = id => {
  return api.get(`${path}${id}`);
};

const createResponse = data => {
  return api.post(`${path}create/`, data);
};

const updateResponse = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteResponse = id => {
  return api.delete(`${path}delete/${id}`);
};



export default {
  getAllResponses,
  getResponse,
  createResponse,
  updateResponse,
  deleteResponse,

};
