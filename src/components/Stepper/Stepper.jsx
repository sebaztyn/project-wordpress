import React from "react";
import {
  StepperContainer,
  StepperContent,
  StepperNode,
  StepperLine,
  StepperNodeContainer,
  StepperNodeText,
} from "./Stepper.style";

const Stepper = () => {
  return (
    <StepperContainer>
      <StepperContent>
        <StepperLine myflex="0.2" />
        <StepperNode />
        <StepperLine />
        <StepperNode />
        <StepperLine />
        <StepperNode />
        <StepperLine />
        <StepperNode />
        <StepperLine />
        <StepperNode />
        <StepperLine myflex="0.2" />
      </StepperContent>
      <StepperNodeContainer>
        <StepperNodeText>Hello</StepperNodeText>
        <StepperNodeText>Hey you!!!</StepperNodeText>
        <StepperNodeText>Hey you!!!</StepperNodeText>
        <StepperNodeText>Hey you!!!</StepperNodeText>
        <StepperNodeText>Hey you!!!</StepperNodeText>
      </StepperNodeContainer>
    </StepperContainer>
  );
};

export default Stepper;
