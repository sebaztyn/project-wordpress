import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  /* position: relative; */
  :hover {
    div {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContent = styled.div`
  height: 20px;
  width: 20px;
  // border: 3px solid rgb(0, 197, 141);
  border: 3px solid #80f3d2;
  border: ${(props) => props.theme.primaryColor} 3px solid;

  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #ffffff;
  border-radius: 50%;
  // animation: spinned 2s linear infinite;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  // animation-direction: alternate-reverse;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
`;
