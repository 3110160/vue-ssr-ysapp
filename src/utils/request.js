import axios from 'axios';
const BAST_URL = 'https://s.inglemirepharmmall.com'
const instance = axios.create({
  timeout: 50000,
  baseURL: BAST_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    appDevice: 2,
    pushUserId: "0",
    platForm: "0",
    deviceNumber: "0"
  }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;