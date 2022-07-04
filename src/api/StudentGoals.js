import api from ".";

const path = "univeristy-tips/";


//// Goals
const getAllGoals = params => {
  return api.get(`${path}`, { params });
};

const getGoal = id => {
  return api.get(`${path}${id}`);
};

const createGoal = data => {
  return api.post(`${path}create/`, data);
};

const updateGoal = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteGoal = id => {
  return api.delete(`${path}delete/${id}`);
};


//// Indicators
const getAllIndicators = params => {
  return api.get(`${path}indicators/`, { params });
};

const getIndicator = id => {
  return api.get(`${path}indicators/${id}`);
};

const createIndicator = data => {
  return api.post(`${path}indicators/create/`, data);
};

const updateIndicator = (id, data) => {
  return api.put(`${path}indicators/update/${id}`, data);
};

const deleteIndicator = id => {
  return api.delete(`${path}indicators/delete/${id}`);
};



export default {
  getAllGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
  getAllIndicators,
  getIndicator,
  createIndicator,
  updateIndicator,
  deleteIndicator,
};
