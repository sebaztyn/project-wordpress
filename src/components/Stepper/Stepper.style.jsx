import React from "react";
import styled from "styled-components";

export const StepperContainer = styled.div``;
export const StepperContent = styled.div`
  display: flex;
  color: ${(props) => props.theme.primaryColor};
  align-items: center;
  margin-top: 1rem;
  padding: 0 5px;
`;
export const StepperNodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${"" /* flex-direction: column; */}
  padding-top: 1rem;
  word-wrap: break-word;
`;
export const StepperNodeText = styled.span`
  color: ${(props) => props.theme.primaryColor};
  flex: 1;
  text-align: center;
`;
export const StepperNode = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
`;
export const StepperLine = styled.hr`
  height: 3px;
  flex-grow: ${(props) => (props.myflex ? props.myflex : 1)};
  background-color: ${(props) => props.theme.primaryColor};
`;
