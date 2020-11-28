import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import axiosInstance from "../utils/fetchData";
import tokenAccess from "../utils/tokenAccess";
import { globalContext, initialState } from "./GlobalContext";

export const loginContext = createContext();
const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { notificationResponse, setNotificationResponse } = useContext(
    globalContext,
  );
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setNotificationResponse(initialState);
    return () => {
      setNotificationResponse(initialState);
    };
  }, []);

  const changeHandler = (event) => {
    setNotificationResponse(initialState);

    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const submitHandler = async () => {
    setLoading(() => true);
    const keys = Object.keys(loginData);
    Object.values(loginData).map((data, index) => {
      const keyData = keys[index];
      return (loginData[keyData] = data.trim());
    });
    try {
      const result = await axiosInstance()("auth/login", {
        method: "POST",
        data: loginData,
      });
      if (result.status === 201) {
        tokenAccess.setToken(result.data.token);
        setNotificationResponse({
          ...notificationResponse,
          response: "Login successful. Redirecting...",
        });
        setTimeout(() => {
          setNotificationResponse({ ...notificationResponse, response: "" });
          setLoading(() => false);
          history.replace("/home");
        }, 5000);
      }
    } catch (error) {
      if (!error.response) {
        setNotificationResponse({
          status: true,
          response: error.message,
          list: [],
          color: "#ff3547",
        });
        return setLoading(() => false);
      }
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.error === "string"
      ) {
        setNotificationResponse({
          status: true,
          response: error.response.data.error,
          list: [],
          color: "#ff3547",
        });
        return setLoading(() => false);
      }
      setNotificationResponse({
        status: true,
        response: "",
        list:
          error.response && error.response.data
            ? error.response.data.error
            : [],
        color: "#ff3547",
      });
      setLoading(() => false);
    }
  };

  return (
    <loginContext.Provider
      value={{
        loginData,
        setLoginData,
        setNotificationResponse,
        notificationResponse,
        submitHandler,
        changeHandler,
        loading,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};

export default LoginProvider;
