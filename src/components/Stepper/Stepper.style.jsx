import React from "react";
import styled from "styled-components";
import { MdPayment } from "react-icons/md";

export const PaymentIcon = styled(MdPayment)`
  color: ${(props) => props.theme.complimentaryColor};
`;
export const StepperContainer = styled.div``;

export const StepperContent = styled.div`
  display: flex;
  color: ${(props) => props.theme.primaryColor};
  align-items: center;
  margin-top: 1rem;
  padding: 0 5px;
`;

export const StepperNodeContainer = styled.div`
  position: relative;
`;

export const StepperNodeText = styled.span`
  color: ${(props) => props.theme.primaryColor};
  flex: 1;
  text-align: center;
  position: absolute;
  top: 100%;
  left: -10px;
  text-align: left;
`;

export const StepperNode = styled.span`
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
`;

export const StepperLine = styled.hr`
  height: 3px;
  flex-grow: ${(props) => (props.myflex ? props.myflex : 1)};
  background-color: ${(props) => props.theme.primaryColor};
`;
