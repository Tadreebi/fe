import api from ".";

const path = "students/"; // To EXACTLY MATCH the relevant URL in BE file of "tadreebi/urls.py"

// List all urls of BE's "app/urls/StudentReport.py"

//// Reports
const getAllReports = params => { // Don't forget to export it in the bottom of this file
  return api.get(`${path}reports/`, { params }); // To EXACTLY MATCH the relevant URL in BE file of "app/urls/StudentReport.py"
};

const getReport = id => {
  return api.get(`${path}reports/${id}`);
};

const createReport = data => {
  return api.post(`${path}reports/create/`, data);
};

const updateReport = (id, data) => {
  return api.put(`${path}reports/update/${id}`, data);
};

const deleteReport = id => {
  return api.delete(`${path}reports/delete/${id}`);
};


//// Remarks
const getAllRemarks = params => {
  return api.get(`${path}remarks/`, { params });
};

const getRemark = id => {
  return api.get(`${path}remarks/${id}`);
};

const createRemark = data => {
  return api.post(`${path}remarks/create/`, data);
};

const updateRemark = (id, data) => {
  return api.put(`${path}remarks/update/${id}`, data);
};

const deleteRemark = id => {
  return api.delete(`${path}remarks/delete/${id}`);
};


//// Skills
const getAllSkills = params => {
  return api.get(`${path}skills/`, { params });
};

const getSkill = id => {
  return api.get(`${path}skills/${id}`);
};

const createSkill = data => {
  return api.post(`${path}skills/create/`, data);
};

const updateSkill = (id, data) => {
  return api.put(`${path}skills/update/${id}`, data);
};

const deleteSkill = id => {
  return api.delete(`${path}skills/delete/${id}`);
};


//// Achievements
const getAllAchievements = params => {
  return api.get(`${path}achievements/`, { params });
};

const getAchievement = id => {
  return api.get(`${path}achievements/${id}`);
};

const createAchievement = data => {
  return api.post(`${path}achievements/create/`, data);
};

const updateAchievement = (id, data) => {
  return api.put(`${path}achievements/update/${id}`, data);
};

const deleteAchievement = id => {
  return api.delete(`${path}achievements/delete/${id}`);
};

export default {
  getAllReports,
  getReport,
  createReport,
  updateReport,
  deleteReport,
  getAllRemarks,
  getRemark,
  createRemark,
  updateRemark,
  deleteRemark,
  getAllSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
  getAllAchievements,
  getAchievement,
  createAchievement,
  updateAchievement,
  deleteAchievement
};
