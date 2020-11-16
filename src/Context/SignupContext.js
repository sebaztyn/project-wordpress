import React, { createContext, useState, useEffect, useContext } from "react";

export const signupContext = createContext();
import axiosInstance from "../utils/fetchData";
import { globalContext } from "./GlobalContext";

const SignupProvider = ({ children }) => {
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
    setNotificationResponse({ status: false, list: [], response: "" });
    return () => {
      setNotificationResponse({ status: false, list: [], response: "" });
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
        setLoading(() => false);
      }
    } catch (error) {
      if (error) {
        setLoading(() => false);
        setNotificationResponse({
          status: true,
          response: "",
          list:
            error.response && error.response.data
              ? error.response.data.error
              : [],
        });
      }
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
