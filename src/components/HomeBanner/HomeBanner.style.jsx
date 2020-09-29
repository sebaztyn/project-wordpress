import React from "react";
import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.complimentaryColor};
  padding: 1.5rem 0.5rem;
`;

export const BannerButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 800;
  transition: all 0.2s linear;
  :hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const BannerContent = styled.div`
  padding: 1.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  font-size: 24px;
  color: #1c1c1c;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-transform: none;
  font-weight: 700;
`;
