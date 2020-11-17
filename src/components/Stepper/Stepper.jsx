import React from "react";
import {
  StepperContainer,
  StepperContent,
  StepperNode,
  StepperLine,
  StepperNodeContainer,
  StepperNodeText,
  PaymentIcon,
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
          <StepperNodeText>Payments</StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>
            Hello dfbdhdshfmd dshjfbfdbfhgr sdbfjhfbfhjdjfbd
          </StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>
            Hello dfbdhdshfmd dshjfbfdbfhgr sdbfjhfbfhjdjfbd
          </StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>
            Hello dfbdhdshfmd dshjfbfdbfhgr sdbfjhfbfhjdjfbd
          </StepperNodeText>
        </StepperNodeContainer>
        <StepperLine />
        <StepperNodeContainer>
          <StepperNode />
          <StepperNodeText>
            Hello dfbdhdshfmd dshjfbfdbfhgr sdbfjhfbfhjdjfbd
          </StepperNodeText>
        </StepperNodeContainer>
        <StepperLine myflex="0.2" />
      </StepperContent>
    </StepperContainer>
  );
};

export default Stepper;
