import axios from "axios";
// import debounce from 'lodash.debounce';

import { API_URL } from "./api";

const customAxios = axios.create({
  timeout: 10000,
});

customAxios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [API_URL];
    const token = JSON.parse(localStorage.getItem("token"));

    // if(allowedOrigins.includes(origin)){
    config.headers.authorization = `Bearer ${token.accessToken}`;
    return config;
    // }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Error handling
// customAxios.interceptors.response.use(
//   res => res,
//   err => {
//     throw new Error(err.response.data.message);
//   }
// )
// const err = await axios.get('http://example.com/notfound')
// .catch(err => err);
// // “Could not find page /notfound”
// err.message;

// Rate Limiter
// customAxios.interceptors.request.use(res => {
// return new Promise((resolve) => {
// // only fire a request every 2 sec
//        debounce(() => resolve(config),2000);
//        });

//   });

export default customAxios;
