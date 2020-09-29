import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export const HeaderButtonContainer = styled.div`
  margin-top: 0.5rem;
  background-color: ;
  position: relative;
  text-align: right;
`;
const ButtonArrow = styled(MdArrowDropDown)`
  color: ${(props) => props.theme.primaryColor};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.complimentaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 10px 15px;
  outline: none;
  border: none;
  font-size: 18px;
`;

const OfficeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: ${(props) => props.top};
  background-color: ${(props) => props.theme.primaryColor};
  color: #ffffff;
  overflow: hidden;
  height: ${(props) => props.height};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  transition: height 0.3s linear;
  > li {
    padding: 10px;
    letter-spacing: 1px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1040px;
  margin: 0.5rem auto 0;
  color: #ffffff;
`;
export const HotlineDiv = styled.div`
  color: #ffffff;
  max-width: 1020px;
  margin: 0.5rem auto 0;
`;
export const NavContainer = styled.nav`
  padding: 10px;
`;

export const LocationIcon = styled(MdLocationOn)`
  color: ${(props) => props.theme.complimentaryColor};
  font-size: 16px;
`;
export const ClockIcon = styled(FaRegClock)`
  color: ${(props) => props.theme.complimentaryColor};
  font-size: 16px;
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  color: ${(props) => props.theme.complimentaryColor};
`;

export const HeaderButton = () => {
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef();
  useEffect(() => {
    setButtonHeight(buttonRef.current.scrollHeight);
  }, []);
  const listRef = useRef();
  const [headerButtonOpen, setHeaderButtonOpen] = useState(false);
  return (
    <HeaderButtonContainer>
      <Button
        onClick={() => {
          setHeaderButtonOpen(!headerButtonOpen);
        }}
        ref={buttonRef}
      >
        Abuja Office &nbsp;
        <ButtonArrow />
      </Button>
      <OfficeList
        top={`${buttonHeight}px`}
        height={`${headerButtonOpen ? listRef.current.scrollHeight : 0}px`}
        ref={listRef}
      >
        <li>Abuja Office</li>
        <li>Sokoto Office</li>
        <li>London Office</li>
      </OfficeList>
    </HeaderButtonContainer>
  );
};

export const HeaderContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.font12};
`;
