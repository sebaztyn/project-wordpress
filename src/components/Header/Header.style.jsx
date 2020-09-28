import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { MdArrowDropDown } from "react-icons/md";
const ITEMS = [{ label: "Abuja Office" }, { label: "Sokoto Office" }];

export const HeaderButtonContainer = styled.div`
  // display: flex;
  // justify-content: flex-end;
  // flex-dire
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
  &:hover:green;
  padding: 10px 15px;
  outline:none;
  border: none;
`;

const OfficeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: ${props => props.top};
  padding: 5px;
  background-color: ${props => props.theme.primaryColor};
  color: #ffffff;
  overflow-y: hidden;
  height: ${props => props.height}
`;

export const HeaderButton = () => {
  const [buttonHeight, setButtonHeight] = useState(0)
  const buttonRef = useRef()
  useEffect(() => {
    setButtonHeight(buttonRef.current.scrollHeight)
  }, [])
  const listRef = useRef();
  const [headerButtonOpen, setHeaderButtonOpen] = useState(false)
  return (
    <HeaderButtonContainer>
      <Button onClick={() => {
        console.log(listRef.current.scrollHeight)
        setHeaderButtonOpen(!headerButtonOpen)
      }} ref={buttonRef}>
        Abuja Office &nbsp;
          <ButtonArrow />
      </Button>
      <OfficeList top={buttonHeight} height={headerButtonOpen ? listRef.current.scrollHeight : 0} ref={listRef}>
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
