import axios from "axios";

const axiosInstance = (token = null) => {
  const axiosData = axios.create({
    baseURL:
      process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
        ? "http://localhost:5000"
        : "https://wordpress-recdel.herokuapp.com",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      // Authorization: token ? `Bearer ${token}` : '',
      "Content-Type": "application/json;charset=UTF-8",
      // "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
      // Accept: "application/vnd.pgrst.object+json",
    },
  });

  axiosData.interceptors.response.use(
    (response) => response,
    // (error) => {
    //   return error.response;
    // },
  );
  // console.log("axiosData :>> ", axiosData);
  return axiosData;
};

export default axiosInstance;
