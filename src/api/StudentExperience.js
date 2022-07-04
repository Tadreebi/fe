import api from ".";

const path = "students/experiences/"; // To EXACTLY MATCH the relevant URL in BE file of "tadreebi/urls.py"

// List all urls of BE's "app/urls/StudentReport.py"

//// Reports
const getAllExperience = params => { // Don't forget to export it in the bottom of this file
  return api.get(`${path}`, { params }); // To EXACTLY MATCH the relevant URL in BE file of "app/urls/StudentReport.py"
};

const getExperience = id => {
  return api.get(`${path}${id}`);
};

const createExperience = data => {
  console.log(data)
  return api.post(`${path}create/`, data);
};

const updateExperience = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteExperience = id => {
  return api.delete(`${path}delete/${id}`);
};



export default {
  getAllExperience,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,

};
