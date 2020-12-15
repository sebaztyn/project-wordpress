import React from "react";
import {
  StepperContainer,
  StepperContent,
  StepperNode,
  StepperLine,
  StepperNodeContainer,
  StepperNodeText,
  PaymentIcon,
  InProgressIcon,
} from "./Stepper.style";

const Stepper = () => {
  return (
    <StepperContainer>
      <StepperContent>
        <StepperLine myflex="0.2" />
        <StepperNodeContainer>
          <StepperNode>
            <PaymentIcon />
          </StepperNode>
          <StepperNodeText>Registration Fee</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode>
            <InProgressIcon />
          </StepperNode>
          <StepperNodeText>Payment Confirmation</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>work in progress</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>work in progress</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>work in progress</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine myflex="0.2" />
      </StepperContent>
    </StepperContainer>
  );
};

export default Stepper;
