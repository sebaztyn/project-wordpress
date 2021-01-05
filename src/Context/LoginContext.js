import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosInstance from '../utils/fetchData';
import tokenAccess from '../utils/tokenAccess';
import { globalContext, initialState } from './GlobalContext';

export const loginContext = createContext();
const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { notificationResponse, setNotificationResponse } = useContext(
    globalContext,
  );
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
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

  const checkCurrentStage = (stage) => {
    switch (stage) {
      case 'PAYMENT_STAGE':
        navigate('home', { replace: true });
        break;
      case 'ACCOUNT_REVIEW_STAGE':
        navigate('home/review', { replace: true });
        break;
      case 'THIRD_STAGE':
        break;
      case 'FOURTH_STAGE':
        break;
      case 'FINAL_STAGE':
        break;

      default:
        break;
    }
    // ENUM(
    //           'PAYMENT_STAGE',
    //           'ACCOUNT_REVIEW_STAGE',
    //           'THIRD_STAGE',
    //           'FOURTH_STAGE',
    //           'FINAL_STAGE',
    //           'NOT_APPLICABLE',
    //         ),
  };

  const submitHandler = async () => {
    setLoading(() => true);
    const keys = Object.keys(loginData);
    Object.values(loginData).map((data, index) => {
      const keyData = keys[index];
      return (loginData[keyData] = data.trim());
    });
    try {
      const result = await axiosInstance()('auth/login', {
        method: 'POST',
        data: loginData,
      });
      if (result.status === 201) {
        tokenAccess.setToken(result.data.token);
        localStorage.setItem(
          'user-info',
          JSON.stringify({
            roleName: result.data.role_name,
            authenticated: true,
            currentStage: result.data.current_stage,
          }),
        );
        setLoginData({
          email: '',
          password: '',
        });
        setLoading(() => false);
        result.data.role_name === 'admin'
          ? navigate('admin', { replace: true })
          : checkCurrentStage(result.data.current_stage);
      }
    } catch (error) {
      if (!error.response) {
        setNotificationResponse({
          status: true,
          response: error.message,
          list: [],
          color: '#ff3547',
        });
        return setLoading(() => false);
      }
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.error === 'string'
      ) {
        setNotificationResponse({
          status: true,
          response: error.response.data.error,
          list: [],
          color: '#ff3547',
        });
        return setLoading(() => false);
      }
      setNotificationResponse({
        status: true,
        response: '',
        list:
          error.response && error.response.data
            ? error.response.data.error
            : [],
        color: '#ff3547',
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
