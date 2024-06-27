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
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const newFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Function to set the authentication token
export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// ALL THE API CALLS

// LOGIN USERS
export const LOGIN = "users/login/";

// Interceptors for token inclusion
const addTokenToRequest = (config) => {
  const token = axios.defaults.headers.common["Authorization"];
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};

newRequest.interceptors.request.use(addTokenToRequest);
newFormRequest.interceptors.request.use(addTokenToRequest);
XFormRequest.interceptors.request.use(addTokenToRequest);
