import { Outlet } from 'react-router-dom';
import useRefreshToken from '../../utils/useRefreshToken';
import Stepper from '../Stepper/Stepper';
import { DashboardContainer } from './Dashboard.style';

const Dashboard = () => {
  const { token, isLoading, error } = useRefreshToken();
  return (
    <DashboardContainer>
      <Stepper />
      <Outlet />
    </DashboardContainer>
  );
};

export default Dashboard;
