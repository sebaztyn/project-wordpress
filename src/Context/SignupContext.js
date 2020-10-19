import React, { createContext, useState } from "react";

export const signupContext = createContext();

const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    confirmPassword: "",
  });
  return (
    <signupContext.Provider
      value={{ signupData: signupData, setSignupData: setSignupData }}
    >
      {children}
    </signupContext.Provider>
  );
};

export default SignupProvider;
