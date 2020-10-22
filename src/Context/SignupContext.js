import React, { createContext, useState, useEffect } from "react";

export const signupContext = createContext();
import axiosInstance from "../utils/fetchData";

const SignupProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({
    status: false,
    list: [],
  });
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
    setErrorObj({ status: false, list: [] });
    return () => {
      console.log("unmounted");
      setErrorObj({ status: false, list: [] });
    };
  }, []);

  const changeHandler = (event) => {
    setErrorObj({ ...errorObj, status: false });

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
      setLoading(() => false);
    } catch (error) {
      if (error) {
        setLoading(() => false);
        setErrorObj({
          status: true,
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
        setErrorObj,
        errorObj,
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
