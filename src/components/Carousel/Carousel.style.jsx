import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from{
    top: 0
  }

  to{
    top: -200%
  }
`;

export const CarouselSliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: auto;
  position: relative;
`;

export const CarouselSlider = styled.div`
  width: 100%;
  height: 200%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${slide} 5s ease-in-out infinite forwards;
`;

export const CarouselSliderContent = styled.div`
  position: absolute;
  left: 20%;
  top: 20%;
  height: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: normal;
  width: 643px;
  line-height: 88px;
  letter-spacing: 0px;
  font-weight: 700;
  font-size: 64px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
`;

export const CarouselSliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
`;
export const CarouselButtonOne = styled.button`
  background-color: ${(props) => props.theme.complimentaryColor};
  color: rgb(34, 34, 34);
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  padding: 1.5rem 2.5rem;
  border-radius: 5px;
`;
