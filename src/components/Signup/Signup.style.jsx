import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SignupContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const SignupImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const SignupWrapper = styled.div`
  background-color: #ffffff;
  width: 80%;
  ${"" /* min-height: 95vh; */}
  box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  display: flex;
  padding-top: 4rem;
  position: relative;
  overflow: auto;
  span {
    flex: 1;
    :first-of-type {
      background-color: ${(props) => props.theme.primaryColor};
    }
    :last-of-type {
      background-color: #ffffff;
    }
  }
`;
export const SignupContent = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 90%;
  margin: auto;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;
export const RegisterLink = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.primaryColor};
  a {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const SignupHeader = styled.h5`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
  color: ${(props) => props.theme.primaryColor};
`;

export const SignupInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;
export const SignupInput = styled.input`
  outline: none;
  border: transparent 1px solid;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 2px;
  font-size: 14px;
  background-color: ${(props) => props.theme.inputFieldColor};
  ::placeholder {
    color: #757575;
    font-size: 14px;
  }
  :focus {
    border: ${(props) => props.theme.primaryColor} 1px solid;
  }
`;

export const CloseButton = styled.button`
  background-color: ${(props) => props.theme.dangerColor};
  font-size: ${(props) => props.theme.font14};
  color: #ffffff;
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
  outline: none;
  border: solid 1px transparent;
  border-radius: 4px;
  display: inline-block;
  ${"" /* width: 7rem; */}
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.dangerColor};
    border-color: ${(props) => props.theme.dangerColor};
  }
`;
export const SignupButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.font14};
  color: #ffffff;
  outline: none;
  border: solid 1px transparent;
  border-radius: 4px;
  display: inline-block;
  width: 80%;
  padding: 1rem 0;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s linear;
  margin: auto;
  :hover {
    background-color: ${(props) => props.theme.complimentaryColor};
    color: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.primaryColor};
  }
`;
