import axios from "axios";
import LocalStorageService from "./localStorageService";

const axiosInstance = () => {
  const token = LocalStorageService.getAccessToken();
  const axiosData = axios.create({
    baseURL: "http://localhost:5000/",
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
    (error) => error,
  );

  return axiosData;
};

export default axiosInstance;
