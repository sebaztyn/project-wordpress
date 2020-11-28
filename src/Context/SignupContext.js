import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../utils/fetchData";
import { globalContext, initialState } from "./GlobalContext";

export const signupContext = createContext();

const SignupProvider = ({ children }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { notificationResponse, setNotificationResponse } = useContext(
    globalContext,
  );
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setNotificationResponse(initialState);
    return () => {
      setNotificationResponse(initialState);
    };
  }, []);

  const changeHandler = (event) => {
    setNotificationResponse({ ...notificationResponse, status: false });

    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const submitHandler = async () => {
    setLoading(() => true);
    const keys = Object.keys(signupData);
    Object.values(signupData).map((data, index) => {
      const keyData = keys[index];
      return (signupData[keyData] = data.trim());
    });
    try {
      const result = await axiosInstance()("auth/signup", {
        method: "POST",
        data: signupData,
      });
      if (result.status === 201) {
        setNotificationResponse({
          ...notificationResponse,
          response: "Signup successful. Redirecting...",
        });
        setTimeout(() => {
          setNotificationResponse({
            ...notificationResponse,
            response: "",
          });
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
    <signupContext.Provider
      value={{
        signupData,
        setSignupData,
        setNotificationResponse,
        notificationResponse,
        submitHandler,
        changeHandler,
        loading,
      }}
    >
      {children}
    </signupContext.Provider>
  );
};

export default SignupProvider;
