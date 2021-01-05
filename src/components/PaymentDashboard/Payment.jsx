import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboardContext } from '../../Context/DashboardContext';
import { refreshToken } from '../../utils/tokenAccess';
import useRefreshToken from '../../utils/useRefreshToken';
import { PaymentButton, PaymentContainer } from './Payment.style';

const Payment = () => {
  const { currentStage } = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();
  if (currentStage !== 'PAYMENT_STAGE') {
    navigate('/', { replace: true });
  }
  const { token, isLoading, error } = useRefreshToken();
  const { openPaymentHandler, onPaymentClose, onPaymentSuccess } = useContext(
    dashboardContext,
  );

  const handlePaymentButton = async () => {
    try {
      const token = await refreshToken();
      if (token) return openPaymentHandler(onPaymentSuccess, onPaymentClose);
      return;
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        // console.log("error.response.data", error.response.data);
        // console.log("error.response.status", error.response.status);
        // console.log("error.response.headers", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('error.request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };
  return (
    <PaymentContainer>
      <PaymentButton onClick={handlePaymentButton}>Make payment</PaymentButton>
    </PaymentContainer>
  );
};

export default Payment;
