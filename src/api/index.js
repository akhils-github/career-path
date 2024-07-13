import axios from "axios";

// Axios instances
const baseConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};
export const basicRequest = axios.create(baseConfig);

export const basicXFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const XFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const newRequest = axios.create({
  ...baseConfig,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/json",
  },
});

export const newFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// ALL THE API CALLS

// LOGIN USERS
export const LOGIN = "users/login/";
export const REGISTER_USER = "users/register/";
export const INDUSTRIES = "users/industries/";
export const SUB_INDUSTRIES = "users/sub-industries/";
export const COUNTRIES = "users/countries";
export const STATES = "users/states";
export const FUNCTIONAL_AREAS = "users/function-areas";
export const CURRENCIES = "users/currencies";

newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
newFormRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

XFormRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
