import { api } from "boot/axios";

export default function useApi() {
  const login = async (user) => {
    // exclude the Authorization header
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await api.post("/auth/login", user, { headers });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getCompanies = async (id = "") => {
    try {
      const response = await api.get(`/companies${id ? "/" + id : ""}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const addCompany = async (company) => {
    try {
      const response = await api.post("/companies", company);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get(`/categories`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getStates = async () => {
    try {
      const response = await api.get(`/state-cities/states`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCitiesByState = async (state_id) => {
    try {
      const response = await api.get(
        `/state-cities/cities?state_id=${state_id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCity = async (latitude, longitude) => {
    try {
      const response = await api.get(
        `/state-cities/city?latitude=${latitude}&longitude=${longitude}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    login,
    getCompanies,
    addCompany,
    getCategories,
    getStates,
    getCitiesByState,
    getCity,
  };
}
