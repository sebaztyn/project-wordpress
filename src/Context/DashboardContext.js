import React, { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/fetchData';
import { refreshToken } from '../utils/tokenAccess';
import useRefreshToken from '../utils/useRefreshToken';

const config = {
  reference: Date.now(),
  email: 'user@example.com',
  amount: 20000,
  publicKey: 'pk_test_d9ce836d7c3abc9d62226746b2fdd633d0cfb0f5',
};

export const dashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token, isLoading } = useRefreshToken();
  const [loading, setLoading] = useState(isLoading);
  const [paymentStatus, setPaymentStatus] = useState('');
  const openPaymentHandler = usePaystackPayment(config);
  useEffect(() => {
    const updateData = async () => {
      try {
        if (paymentStatus === 'success') {
          setLoading(() => true);
          const paymentResult = await updatePaymentRecord();
          if (paymentResult && paymentResult.status === 200) {
            const userInfo = JSON.parse(localStorage.getItem('user-info'));
            const obj = { ...userInfo, currentStage: 'ACCOUNT_REVIEW_STAGE' };
            localStorage.setItem('user-info', JSON.stringify(obj));
            setLoading(() => false);
            return navigate('/home/review', { replace: true });
          }
        }
      } catch (error) {
        setLoading(() => false);
        console.log('error', error);
      }
    };
    updateData();
  }, [paymentStatus]);

  const updatePaymentRecord = async () => {
    setLoading(() => true);
    try {
      const tkn = await refreshToken();
      const pytupdate = await axiosInstance(tkn)('auth/update', {
        method: 'PUT',
        data: {
          payment_status: 'PAID',
          current_stage: 'ACCOUNT_REVIEW_STAGE',
        },
      });
      console.log('pytupdate :>> ', pytupdate);
      setLoading(() => false);
      return pytupdate;
    } catch (error) {
      setLoading(() => false);
      console.log('error :>> ', error);
    }
  };

  const onPaymentSuccess = (reference) => {
    if (reference.status === 'success') {
      setPaymentStatus(reference.status);
    }
  };

  const onPaymentClose = () => console.log('closed');

  return (
    <dashboardContext.Provider
      value={{
        updatePaymentRecord,
        openPaymentHandler,
        onPaymentClose,
        onPaymentSuccess,
      }}
    >
      {children}
    </dashboardContext.Provider>
  );
};

export default DashboardProvider;
