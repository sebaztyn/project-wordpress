import React from "react";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: Date.now(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_d9ce836d7c3abc9d62226746b2fdd633d0cfb0f5",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};
const PaystackIntegration = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Make Payment
      </button>
    </div>
  );
};

export default PaystackIntegration;
