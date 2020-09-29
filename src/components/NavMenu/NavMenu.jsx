import React, { useRef, useState, useEffect } from "react";

import {
  NavContainer,
  NavList,
  NavListItem,
  NavListLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "./NavMenu.style";
import HomeLogo from "../../assets/logo-1.png";

const NavMenu = () => {
  const aboutUsUlRef = useRef();
  const [aboutUsUlVisible, setAboutUsUlVisible] = useState(false);
  const [servicesPopupVisible, setServicesPopupVisible] = useState(false);
  const [galleryPopupVisible, setGalleryPopupVisible] = useState(false);

  // console.log("children :>> ", children);
  return (
    <NavContainer>
      <img src={HomeLogo} />
      <NavList>
        <NavListItem>
          <NavListLink href="#">Home</NavListLink>
        </NavListItem>
        <NavListItem
          ref={aboutUsUlRef}
          onMouseEnter={() => setAboutUsUlVisible(true)}
          onMouseLeave={() => setAboutUsUlVisible(false)}
        >
          <NavListLink href="#">About us</NavListLink>
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
          <NavListLink href="#">Services</NavListLink>
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
          <NavListLink href="#">Gallery</NavListLink>
          {galleryPopupVisible && (
            <NavList>
              <NavListItem>Video</NavListItem>
              <NavListItem>Photo</NavListItem>
            </NavList>
          )}
        </NavListItem>
        <NavListItem>
          <NavListLink href="#">Resources</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink href="#">Contacts</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink href="#">
            <FacebookIcon />
          </NavListLink>
          <NavListLink href="#">
            <TwitterIcon />
          </NavListLink>
          <NavListLink href="#">
            <InstagramIcon />
          </NavListLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  );
};

export default NavMenu;
