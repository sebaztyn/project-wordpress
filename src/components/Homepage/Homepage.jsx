import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomepageContactForm from '../HomepageContactForm/HomepageContactForm';
import HomeServices from '../HomepageServices/HomeServices';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
  // const { path, match } = useRouteMatch();
  return (
    <div
      className='homepage'
      style={{ backgroundColor: '#f5f5f5', position: 'absolute' }}
    >
      <Header />
      <Carousel />
      <HomeBanner />
      <HomeServices />
      <HomepageContactForm />
      <Outlet />
    </div>
  );
};

export default Homepage;
