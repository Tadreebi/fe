import api from ".";

const path = "students/reports/";

//// Reports
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

//// Report Types
const getAllReportTypes = params => {
  return api.get(`${path}types/`, { params });
};

const getReportType = id => {
  return api.get(`${path}types/${id}`);
};

const createReportType = data => {
  return api.post(`${path}types/create/`, data);
};

const updateReportType = (id, data) => {
  return api.put(`${path}types/update/${id}`, data);
};

const deleteReportType = id => {
  return api.delete(`${path}types/delete/${id}`);
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
  getAllReportTypes,
  getReportType,
  createReportType,
  updateReportType,
  deleteReportType,
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
