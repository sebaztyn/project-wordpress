import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router-dom";

const config = {
  reference: Date.now(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_d9ce836d7c3abc9d62226746b2fdd633d0cfb0f5",
};

export const dashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const history = useHistory();
  const openPaymentHandler = usePaystackPayment(config);
  useEffect(() => {
    return () => {};
  }, []);

  const onPaymentSuccess = (reference) => {
    if (reference.status === "success") return history.replace("/home/review");
  };

  const onPaymentClose = () => console.log("closed");

  return (
    <dashboardContext.Provider
      value={{ openPaymentHandler, onPaymentClose, onPaymentSuccess }}
    >
      {children}
    </dashboardContext.Provider>
  );
};

export default DashboardProvider;
