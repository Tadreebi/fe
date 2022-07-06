import api from ".";

const path = "univeristy-tips/";

//// Tips
const getAllTips = params => {
  return api.get(`${path}`, { params });
};

const getTip = id => {
  return api.get(`${path}${id}`);
};

const createTip = data => {
  return api.post(`${path}create/`, data);
};

const updateTip = (id, data) => {
  return api.put(`${path}update/${id}`, data);
};

const deleteTip = id => {
  return api.delete(`${path}delete/${id}`);
};


//// Topics
const getAllTopics = params => {
  return api.get(`${path}topics/`, { params });
};

const getTopic = id => {
  return api.get(`${path}topics/${id}`);
};

const createTopic = data => {
  return api.post(`${path}topics/create/`, data);
};

const updateTopic = (id, data) => {
  return api.put(`${path}topics/update/${id}`, data);
};

const deleteTopic = id => {
  return api.delete(`${path}topics/delete/${id}`);
};


export default {
  getAllTips,
  getTip,
  createTip,
  updateTip,
  deleteTip,
  getAllTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
