import React, { useContext } from "react";
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
import axiosInstance from "../../utils/fetchData";
import { signupContext } from "../../Context/SignupContext.js";

const Signup = () => {
  const { signupData, setSignupData } = useContext(signupContext);
  const history = useHistory();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const submitHandler = async () => {
    const keys = Object.keys(signupData);
    Object.values(signupData).map((data, index) => {
      const keyData = keys[index];
      return (signupData[keyData] = data.trim());
    });
    const result = await axiosInstance()({
      url: "http://localhost:5000",
      method: "POST",
      data: signupData,
    });
    console.log("result :>> ", result);
  };
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
              <SignupInput
                placeholder="First Name"
                type="text"
                name="firstname"
                value={signupData.firstname}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Last Name"
                type="text"
                name="lastname"
                value={signupData.lastname}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Phone Number"
                type="text"
                name="phone"
                value={signupData.phone}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Age"
                type="text"
                name="age"
                value={signupData.age}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Email"
                type="email"
                name="email"
                value={signupData.email}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Password"
                type="password"
                name="password"
                value={signupData.password}
                onChange={changeHandler}
              />
              <SignupInput
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={changeHandler}
              />
              <SignupButton onClick={submitHandler}>Signup</SignupButton>
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
