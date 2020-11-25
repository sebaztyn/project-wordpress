import axiosInstance from './fetchData';

// memoryJWT.js
const tokenAccessHandler = () => {
  let memoryJWT = null;

  const getToken = () => memoryJWT;
  const setToken = (token) => {
    memoryJWT = token;
    return memoryJWT;
  };

  const deleteToken = () => {
    memoryJWT = null;
    return true;
  };

  return {
    deleteToken,
    getToken,
    setToken,
  };
};

export const refreshToken = async () => {
  const tokenManager = tokenAccessHandler();
  try {
    const result = await axiosInstance()('refresh_token', {
      method: 'GET',
    });
    setTimeout(refreshToken, result.data.expires_in * 1000 - 1000);
    return tokenManager.setToken(result.data.token);
  } catch (error) {
    console.log(error);
  }
};

export default tokenAccessHandler();
