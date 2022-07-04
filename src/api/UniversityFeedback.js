import api from ".";

const path = "univeristy-feedbacks/";

const getAllUniversityFeedback = params => {
  return api.get(`${path}/`, { params });
};

const getUniversityFeedback = id => {
  return api.get(`${path}${id}/`);
};

const createUniversityFeedback = data => {
  return api.post(`${path}/`, data);
};

const updateUniversityFeedback = (id, data) => {
  return api.put(`${path}${id}/`, data);
};

const deleteUniversityFeedback = id => {
  return api.delete(`${path}${id}/`);
};


export default {
  getAllUniversityFeedback,
  getUniversityFeedback,
  createUniversityFeedback,
  updateUniversityFeedback,
  deleteUniversityFeedback
};
