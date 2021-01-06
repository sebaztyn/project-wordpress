import React from 'react';
import PaystackIntegration from '../../utils/PaystackIntegration';
import Videos from '../Videos/Videos.jsx';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Admin from '../AdminDashboard/Admin';
import Dashboard from '../Dashboard/Dashboard';
import RegistrationReview from '../RegistrationReview/RegistrationReview';
import Payment from '../PaymentDashboard/Payment';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import VideoContextProvider from '../../Context/VideoContext';

const routes = [
  { component: <Videos />, path: '/videos', isExact: false },
  { component: <PaystackIntegration />, path: '/payment', isExact: false },
  { component: <Dashboard />, path: 'home/*', isExact: false },
  { component: <Admin />, path: '/admin', isExact: false },
  { component: <Homepage />, path: '/', isExact: true },
];

const Layout = () => {
  return (
    <Routes>
      <Route
        element={
          <VideoContextProvider>
            <Videos />
          </VideoContextProvider>
        }
        path='videos'
      />
      <Route element={<PaystackIntegration />} path='payment' />
      <Route element={<Dashboard />} path='home/*'>
        <Route path='/' element={<Payment />} exact />
        <Route path='review' element={<RegistrationReview />} />
      </Route>
      <Route element={<Admin />} path='admin' />
      <Route element={<Homepage />} path='/'>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Layout;
