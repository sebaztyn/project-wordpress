import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdClear } from "react-icons/md";

export const ErrorContainer = styled.ul`
  color: ${(props) => props.theme.dangerColor};
  list-style: none;
  position: fixed;
  left: ${(props) => props.left || "10px"};
  bottom: 30px;
  max-width: 90vw;
  padding: 1rem;
  background-color: #ffffff;
  transition: left 2s linear;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
`;
export const ErrorClose = styled(MdClear)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
`;

export const ErrorList = styled.li`
  color: ${(props) => props.theme.dangerColor};
  font-size: 14px;
  padding: 5px;
  font-weight: 500;
  font-style: italic;
`;
export const ErrorHeader = styled.h3`
  text-align: center;
  padding: 5px;
`;
