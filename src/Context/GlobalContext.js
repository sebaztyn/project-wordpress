import React, { createContext, useState } from 'react';

export const globalContext = createContext();

export const initialState = {
  status: false,
  list: [],
  response: '',
  color: '#3bc552',
};
const GlobalProvider = ({ children }) => {
  const [notificationResponse, setNotificationResponse] = useState(
    initialState,
  );
  return (
    <globalContext.Provider
      value={{
        notificationResponse,
        setNotificationResponse,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
