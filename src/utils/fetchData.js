import axios from 'axios';
import LocalStorageService from './localStorageService';
import tokenAccessHandler from './tokenAccess.js';

const axiosInstance = (token = null) => {
  // const token = LocalStorageService.getAccessToken();
  console.log('tokenAccessHandler.getToken() :>> ', token);
  const axiosData = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    // baseURL: "https://wordpress-recdel.herokuapp.com/",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      // Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
      Accept: 'application/vnd.pgrst.object+json',
    },
  });

  axiosData.interceptors.response.use(
    (response) => response,
    // (error) => {
    //   console.log(error.response, ">>>>>>>>>ERROR!!!!!!!!<<<<<<<<<<<<");
    //   return error.response;
    // },
  );
  // console.log("axiosData :>> ", axiosData);
  return axiosData;
};

export default axiosInstance;
