import axios, { AxiosInstance } from "axios";

import { AxiosConfig } from "global/global-model";
import { BASE_URL } from "global/global-constant";

const axiosServiceConfig: AxiosConfig = {
  baseURL: BASE_URL,
  timeout: 50000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};

const axiosServiceClient: AxiosInstance = axios.create(axiosServiceConfig);

//Request interceptor
// axiosServiceClient.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// //Response interceptor

// axiosServiceClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error.response);
//   }
// );

export default axiosServiceClient;
