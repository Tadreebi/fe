import api from ".";

const path = "students/profile/";


//// Student Profile
const getAllProfiles = params => {
  return api.get(`${path}`, { params });
};

const getProfile = id => {
  return api.get(`${path}${id}`);
};

const createProfile = data => {
  return api.post(`${path}create/`, data);
};

const updateProfile = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteProfile = id => {
  return api.delete(`${path}delete/${id}`);
};


//// Student Profile Experiences
const getAllExperiences = params => {
  return api.get(`${path}experiences/`, { params });
};

const getExperience = id => {
  return api.get(`${path}experiences/${id}`);
};

const createExperience = data => {
  return api.post(`${path}experiences/create/`, data);
};

const updateExperience = (id, data) => {
  return api.put(`${path}experiences/update/${id}`, data);
};

const deleteExperience = id => {
  return api.delete(`${path}experiences/delete/${id}`);
};


//// Student Profile Skills
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


//// Student Profile Educations
const getAllEducations = params => {
  return api.get(`${path}educations/`, { params });
};

const getEducation = id => {
  return api.get(`${path}educations/${id}`);
};

const createEducation = data => {
  return api.post(`${path}educations/create/`, data);
};

const updateEducation = (id, data) => {
  return api.put(`${path}educations/update/${id}`, data);
};

const deleteEducation = id => {
  return api.delete(`${path}educations/delete/${id}`);
};

//// Student Profile Languages
const getAllLanguages = params => {
  return api.get(`${path}languages/`, { params });
};

const getLanguage = id => {
  return api.get(`${path}languages/${id}`);
};

const createLanguage = data => {
  return api.post(`${path}languages/create/`, data);
};

const updateLanguage = (id, data) => {
  return api.put(`${path}languages/update/${id}`, data);
};

const deleteLanguage = id => {
  return api.delete(`${path}languages/delete/${id}`);
};

//// Student Profile Contacts
const getAllContacts = params => {
  return api.get(`${path}contacts/`, { params });
};

const getContact = id => {
  return api.get(`${path}contacts/${id}`);
};

const createContact = data => {
  return api.post(`${path}contacts/create/`, data);
};

const updateContact = (id, data) => {
  return api.put(`${path}contacts/update/${id}`, data);
};

const deleteContact = id => {
  return api.delete(`${path}contacts/delete/${id}`);
};

//// Student Profile Works
const getAllWorks = params => {
  return api.get(`${path}works/`, { params });
};

const getWork = id => {
  return api.get(`${path}works/${id}`);
};

const createWork = data => {
  return api.post(`${path}works/create/`, data);
};

const updateWork = (id, data) => {
  return api.put(`${path}works/update/${id}`, data);
};

const deleteWork = id => {
  return api.delete(`${path}works/delete/${id}`);
};

export default {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,

  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,

  getAllSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,

  getAllEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,

  getAllLanguages,
  getLanguage,
  createLanguage,
  updateLanguage,
  deleteLanguage,

  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,

  getAllWorks,
  getWork,
  createWork,
  updateWork,
  deleteWork,

};
