import { useRef, useState, useEffect, useContext } from 'react';

import {
  NavContainer,
  NavList,
  NavListItem,
  NavListLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  NavRouteLink,
  VideoRouteLink,
} from './NavMenu.style';
import HomeLogo from '../../assets/logo-1.png';
import { globalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const aboutUsUlRef = useRef();
  const [aboutUsUlVisible, setAboutUsUlVisible] = useState(false);
  const [servicesPopupVisible, setServicesPopupVisible] = useState(false);
  const [galleryPopupVisible, setGalleryPopupVisible] = useState(false);
  const navigate = useNavigate();
  const checkCurrentStage = (stage) => {
    switch (stage) {
      case 'PAYMENT_STAGE':
        navigate('home', { replace: true });
        break;
      case 'ACCOUNT_REVIEW_STAGE':
        navigate('home/review', { replace: true });
        break;
      case 'THIRD_STAGE':
        break;
      case 'FOURTH_STAGE':
        break;
      case 'FINAL_STAGE':
        break;

      default:
        break;
    }
    // ENUM(
    //           'PAYMENT_STAGE',
    //           'ACCOUNT_REVIEW_STAGE',
    //           'THIRD_STAGE',
    //           'FOURTH_STAGE',
    //           'FINAL_STAGE',
    //           'NOT_APPLICABLE',
    //         ),
  };
  const authHandler = () => {
    const result = userInfo && userInfo.authenticated;
    switch (result) {
      case true:
        localStorage.clear();
        navigate('/', { replace: true });
        break;
      default:
        navigate('/login', { replace: true });
        break;
    }
  };
  const dashboardNavigationHandler = (event) => {
    event.preventDefault();
    if (userInfo.roleName === 'admin') {
      return navigate('/admin', {
        replace: true,
      });
    }
    checkCurrentStage(userInfo.currentStage);
  };
  return (
    <NavContainer>
      <img src={HomeLogo} />
      <NavList>
        <NavListItem>
          <NavListLink href='#'>Home</NavListLink>
        </NavListItem>
        <NavListItem
          ref={aboutUsUlRef}
          onMouseEnter={() => setAboutUsUlVisible(true)}
          onMouseLeave={() => setAboutUsUlVisible(false)}
        >
          <NavListLink href='#'>About us</NavListLink>
          {aboutUsUlVisible && (
            <NavList>
              <NavListItem>About</NavListItem>
              <NavListItem>Our Approach</NavListItem>
              <NavListItem>Partners</NavListItem>
              <NavListItem>Careers</NavListItem>
              <NavListItem>Our Team</NavListItem>
            </NavList>
          )}
        </NavListItem>
        <NavListItem
          onMouseEnter={() => setServicesPopupVisible(true)}
          onMouseLeave={() => setServicesPopupVisible(false)}
        >
          <NavListLink href='#'>Services</NavListLink>
          {servicesPopupVisible && (
            <NavList>
              <NavListItem>Financial Services</NavListItem>
              <NavListItem>Training</NavListItem>
              <NavListItem>Business Consultancy</NavListItem>
              <NavListItem>Research</NavListItem>
              <NavListItem>Survey</NavListItem>
            </NavList>
          )}
        </NavListItem>
        <NavListItem
          onMouseEnter={() => setGalleryPopupVisible(true)}
          onMouseLeave={() => setGalleryPopupVisible(false)}
        >
          <NavListLink href='#'>Gallery</NavListLink>
          {galleryPopupVisible && (
            <NavList>
              {/* <NavListItem>Video</NavListItem> */}
              <VideoRouteLink to='/videos'>Videos</VideoRouteLink>

              <NavListItem>Photo</NavListItem>
            </NavList>
          )}
        </NavListItem>
        <NavListItem>
          <NavListLink href='#'>Resources</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink href='#'>Contacts</NavListLink>
        </NavListItem>
        {userInfo && userInfo.authenticated ? (
          <NavListItem>
            <NavListLink onClick={dashboardNavigationHandler}>
              Dashboard
            </NavListLink>
          </NavListItem>
        ) : null}
        <NavListItem>
          <NavListLink href='#'>
            <FacebookIcon />
          </NavListLink>
          <NavListLink href='#'>
            <TwitterIcon />
          </NavListLink>
          <NavListLink href='#'>
            <InstagramIcon />
          </NavListLink>
        </NavListItem>
        <NavListItem>
          <NavRouteLink
            onClick={authHandler}
            {...(userInfo && userInfo.authenticated
              ? { logoutColor: '#ff3547' }
              : { loginColor: '#05cd51' })}
          >
            {userInfo && userInfo.authenticated ? 'Logout' : 'Login'}
          </NavRouteLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  );
};

export default NavMenu;
