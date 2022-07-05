import api from ".";

const path = "company-ratings/";

//// Responses
const getAllScores = params => {
  return api.get(`${path}`, { params });
};

const getScore = id => {
  return api.get(`${path}${id}`);
};

const createScore = data => {
  return api.post(`${path}create/`, data);
};

const updateScore = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteScore = id => {
  return api.delete(`${path}delete/${id}`);
};


export default {
  getAllScores,
  getScore,
  createScore,
  updateScore,
  deleteScore,
};
