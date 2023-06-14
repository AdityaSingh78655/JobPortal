import axios from "axios";
import { ApiUrl } from "../constants/StringConstants";
import store from "../store/store";
import _ from "lodash";
import { updateToken } from "../store/reducer/LoginSlice";
const axiosInstanceAuth = axios.create({
  baseURL: ApiUrl.BASEURL,
});

axiosInstanceAuth.interceptors.request.use(
  async (config) => {
    const token = store.getState().login.token;
    const refresh = store.getState().login.refresh;
    console.log(token, "tokentokentoken");
    // console.log(refresh,'refreshToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(config, "configData");
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstanceAuth.interceptors.response.use(
  (response) => {
    console.log(response, "response");
    return response;
  },
  async function (error) {
    console.log(error?.response?.data?.error, "error_message");
    const originalRequest = error.config;
    console.log(error.response.status,'error.response.status');
    console.log(originalRequest,'originalRequest');
    if (error?.response?.status === 401 && originalRequest._retry === false) {
      const refresh = store.getState().login.refresh;
      console.log(refresh,'refreshAfterExpire');
      const tokenRes = await axiosInstanceAuth.get(
        ApiUrl.REFRESH_TOKEN,
        refresh
      );
      console.log(tokenRes,'tokenRestokenRes');
      store.dispatch(updateToken(tokenRes.data));
      // get access token from refresh token and retry
      originalRequest._retry = true;
      return axiosInstanceAuth(originalRequest);
    } else {
      return error?.response?.data?.error;
    }
  }
);

export default axiosInstanceAuth;
