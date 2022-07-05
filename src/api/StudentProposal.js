import api from ".";

const path = "students/proposals/"; // To EXACTLY MATCH the relevant URL in BE file of "tadreebi/urls.py"

// List all urls of BE's "app/urls/StudentReport.py"

//// Reports
const getAllProposals = params => { // Don't forget to export it in the bottom of this file
  return api.get(`${path}`, { params }); // To EXACTLY MATCH the relevant URL in BE file of "app/urls/StudentReport.py"
};

const getProposal = id => {
  return api.get(`${path}${id}`);
};

const createProposal = data => {
  return api.post(`${path}create/`, data);
};

const updateProposal = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteProposal = id => {
  return api.delete(`${path}delete/${id}`);
};


export default {
  getAllProposals,
  getProposal,
  createProposal,
  updateProposal,
  deleteProposal,
};
