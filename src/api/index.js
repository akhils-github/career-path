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

// ALL THE API CALLS

// LOGIN USERS
export const LOGIN = "users/login/";
export const REGISTER_USER = "users/register/";
export const GOOGLE_LOGIN = "users/google_login/";
export const FACEBOOK_LOGIN = "users/facebook_login/";
export const LINKEDIN_LOGIN = "users/linkedin_login/";

//profile create
export const INDUSTRIES = "users/industries/";
export const SUB_INDUSTRIES = "users/sub-industries/";
export const COUNTRIES = "users/countries/";
export const STATES = "users/states/";
export const CITIES = "users/cities/";
export const FUNCTIONAL_AREAS = "users/function-areas/";
export const CURRENCIES = "users/currencies/";
export const PROFILE_CREATE = "users/save/";
export const COURSES_LIST = "users/courses_list/";
export const SPECIALIZATION = "users/specializations_list/";
export const LOCATIONS_LIST = "users/locations_list/";

//profile Details
export const LANGUAGES = "users/languages/";
export const RELIGION = "users/religions/";
export const SAVE_MEMBER = "users/save_member/";

export const GET_PROFILES = "users/profile/";
export const PROFILE_UPDATE = "users/profile_update/";

newRequest.interceptors.request.use((config) => {
  const localData = JSON.parse(localStorage.getItem("resData"));
  const token = localData?.access_token;
  console.log(token);
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
newFormRequest.interceptors.request.use((config) => {
  const localData = JSON.parse(localStorage.getItem("resData"));
  const token = localData?.access_token;
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

XFormRequest.interceptors.request.use((config) => {
  const localData = JSON.parse(localStorage.getItem("resData"));
  const token = localData?.access_token;
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
