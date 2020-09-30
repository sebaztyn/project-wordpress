import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { VscAdd } from "react-icons/vsc";

export const ServiceContainer = styled.div`
  padding: 4rem;
  max-width: 1140px;
  margin: auto;
  background-color: #f5f5f5;
`;
export const ForwardArrowIcon = styled(IoIosArrowForward)`
  color: ${(props) => props.theme.complimentaryColor};
  margin-left: 1rem;
  font-size: 24px;
`;
export const AddIcon = styled(VscAdd)`
  color: #ffffff;
  font-size: 40px;
`;
export const ServiceHeader = styled.h1`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.primaryColor};
  text-align: center;
`;
export const ServiceCard = styled.a`
  padding-bottom: 2rem;
  background-color: #ffffff;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  :first-of-type,
  :nth-of-type(2),
  :nth-of-type(3) {
    margin-right: 2rem;
  }
  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: #ffffff;
  }
  :hover > div:last-of-type {
    background-color: ${(props) => props.theme.primaryColor};
    color: #ffffff;
  }
  :hover > div:first-of-type {
    > div {
      height: 100%;
    }
  }
  :hover a {
    background-color: ${(props) => props.theme.primaryColor};
    color: #ffffff;
  }
  :hover h3 {
    background-color: ${(props) => props.theme.primaryColor};
    color: #ffffff;
  }
`;
export const ServiceCardImage = styled.img.attrs(({ custom }) => ({
  "data-custom": custom,
}))`
  width: 100%;
  height: auto;
  display: block;
`;
export const ServiceCardImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 0;
  margin: 0;
  padding: 0;
`;

export const ServiceCardImageOverlay = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const ServiceCardContent = styled.div`
  padding: 1.5rem;
  h3 {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
    text-align: left;
  }
  div {
    font-size: 13px;
    color: #999999;
    text-align: left;
  }
  a {
    margin-top: 1.5rem;
    display: flex;
    ${"" /* justify-content: space-around; */}
    align-items: center;
    color: ${(props) => props.theme.primaryColor};
    text-decoration: none;
  }
`;

export const ServiceCardParent = styled.div`
  display: flex;
  ${"" /* max-width: 1140px; */}
`;
