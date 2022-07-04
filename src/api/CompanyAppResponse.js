import api from ".";

const path = "company/application-response/";

//// Responses
const getAllAppResponses = params => {
    return api.get(`${path}`, { params });
  };

  const getAppResponse = id => {
    return api.get(`${path}${id}`);
  };

  const createAppResponse = data => {
    return api.post(`${path}create/`, data);
  };

  const updateAppResponse = (id, data) => {
    return api.put(`${path}update/${id}`, data);
  };

  const deleteAppResponse = id => {
    return api.delete(`${path}delete/${id}`);
  };




  export default {
    getAllAppResponses,
    getAppResponse,
    createAppResponse,
    updateAppResponse,
    deleteAppResponse,
  };
