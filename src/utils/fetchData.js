import axios from "axios";
import LocalStorageService from "./localStorageService";

const axiosInstance = () => {
  const token = LocalStorageService.getAccessToken();
  const axiosData = axios.create({
    baseURL: "https://wordpress-recdel.herokuapp.com/",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/vnd.pgrst.object+json",
    },
  });

  axiosData.interceptors.response.use(
    (response) => {
      console.log("response.data", response.data);
      return response;
    },
    // (error) => {
    //   console.log(error.response, ">>>>>>>>>ERROR!!!!!!!!<<<<<<<<<<<<");
    //   return error.response;
    // },
  );
  // console.log("axiosData :>> ", axiosData);
  return axiosData;
};

export default axiosInstance;
