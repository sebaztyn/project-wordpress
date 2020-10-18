import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  CloseButton,
  SignupContainer,
  SignupWrapper,
  SignupContent,
  SignupHeader,
  SignupInput,
  SignupInputContainer,
  SignupButton,
  RegisterLink,
  SignupImage,
} from "./Signup.style";
import DisplayImage from "../../assets/undraw_personal_goals.png";

const Signup = () => {
  const history = useHistory();
  return (
    <SignupContainer>
      <SignupWrapper>
        <CloseButton onClick={() => history.replace("/")}>Close</CloseButton>
        <span>
          <SignupImage src={DisplayImage} alt="signup-image" />
        </span>
        <span>
          <SignupContent>
            <SignupHeader>Welcome, Signup please.</SignupHeader>
            <SignupInputContainer>
              <SignupInput placeholder="First Name" type="text" />
              <SignupInput placeholder="Last Name" type="text" />
              <SignupInput placeholder="Phone Number" type="text" />
              <SignupInput placeholder="Age" type="text" />
              <SignupInput placeholder="Email" type="email" />
              <SignupInput placeholder="Password" type="password" />
              <SignupInput placeholder="Confirm password" type="password" />
              <SignupButton>Signup</SignupButton>
            </SignupInputContainer>
            <RegisterLink>
              Already Signed up?&nbsp;
              <NavLink to="/login">Login</NavLink>
            </RegisterLink>
          </SignupContent>
        </span>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
