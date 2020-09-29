import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

export const NavContainer = styled.nav`
  padding: 0.5rem 0;
  max-width: 1040px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  :nth-of-type(2) {
    > a {
      display: flex;
      padding: 0 10px;
      :hover {
        color: #6c98e1;
      }
      ~ ul {
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100%;
        left: -10px;
        overflow: hidden;
        display: block;
        text-align: left;
        padding: 0;
        > li {
          white-space: nowrap;
          padding: 1rem;
          min-width: 150px;
          font-size: ${(props) => props.theme.font12};
          :hover {
            color: #ffffff;
            background-color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }
  }
  :nth-of-type(3) {
    > a {
      display: flex;
      padding: 0 10px;
      :hover {
        color: #6c98e1;
      }
      ~ ul {
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100%;
        left: -10px;
        overflow: hidden;
        display: block;
        text-align: left;
        padding: 0;
        > li {
          white-space: nowrap;
          padding: 1rem;
          min-width: 150px;
          font-size: ${(props) => props.theme.font12};
          :hover {
            color: #ffffff;
            background-color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }
  }
  :nth-of-type(4) {
    > a {
      display: flex;
      padding: 0 10px;
      :hover {
        color: #6c98e1;
      }
      ~ ul {
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100%;
        left: -10px;
        overflow: hidden;
        display: block;
        text-align: left;
        padding: 0;
        > li {
          white-space: nowrap;
          padding: 1rem;
          min-width: 150px;
          font-size: ${(props) => props.theme.font12};
          :hover {
            color: #ffffff;
            background-color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }
  }
  :last-of-type {
    > a {
      display: flex;
      padding: 0 10px;
    }
  }
`;

export const NavListLink = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
`;

export const FacebookIcon = styled(ImFacebook)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
`;
export const TwitterIcon = styled(ImTwitter)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
`;
export const InstagramIcon = styled(FaInstagram)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
`;
