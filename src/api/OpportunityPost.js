import api from ".";

const path = "opportunity-posts/";

//// Opportunity Post
const getAllPosts = params => {
  return api.get(`${path}posts/`, { params });
};

const getPost = id => {
  return api.get(`${path}posts/${id}`);
};

const createPost = data => {
  return api.post(`${path}posts/create/`, data);
};

const updatePost = (id, data) => {
  return api.put(`${path}posts/update/${id}`, data);
};

const deletePost = id => {
  return api.delete(`${path}posts/delete/${id}`);
};


export default {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
