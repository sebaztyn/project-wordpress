import React from "react";
import { MdMail } from "react-icons/md";
import { ImLocation, ImPhone } from "react-icons/im";
import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: #ffffff;
  padding: 4rem;
  display: flex;
`;

export const ContactSection = styled.div`
  :first-of-type {
    flex: 1;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
      > span {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    >span{
      display:flex
    }
  }
  }

  :last-of-type {
    flex: 2;
    max-width: 50%;
    > div {
      :last-of-type{
      flex: 1;
      display: flex;
      }
      &>div {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
        :first-of-type{
        flex: 2;
        max-width: 55%;
        justify-content: space-between;
        };
        :last-of-type{
        min-width: 40%;
        margin: 0;
        };
        >input{
        padding: 1rem;
        flex: 1;
        outline: none;
        border: none;
        ::placeholder{
          font-size: 14px;
        };
        :first-of-type{
          margin-bottom: 1rem;
        }
        :nth-of-type(2){
          margin-bottom: 1rem;
        }
      }
      >textarea{
        padding: 1rem;
        flex: 1;
        outline: none;
        border: none;
        font-family: ${(props) => props.theme.primaryFont},sans-serif;
        margin-bottom: 1rem
      }
      >button{
        background-color: ${(props) => props.theme.complimentaryColor};
        color: rgb(34, 34, 34);
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: 700;
        padding: 0.5rem 2.5rem;
        border-radius: 5px;
      }
    }
  }
`;
export const ContactHeader = styled.h2`
  padding-bottom: 1rem;
`;

export const LocationIcon = styled(ImLocation)`
  color: ${(props) => props.theme.complimentaryColor};
  font-size: 40px;
  margin-right: 1rem;
`;
export const MailIcon = styled(MdMail)`
  color: ${(props) => props.theme.complimentaryColor};
  font-size: 16px;
  margin-right: 1rem;
`;
export const PhoneIcon = styled(ImPhone)`
  color: ${(props) => props.theme.complimentaryColor};
  margin-right: 1rem;
  font-size: 16px;
`;
