import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import DisplayImage from "../../assets/undraw_developer_activity_bv83.png";
import {
  CloseButton,
  LoginContainer,
  LoginWrapper,
  LoginContent,
  LoginHeader,
  LoginInput,
  LoginInputContainer,
  LoginButton,
  RegisterLink,
  LoginImage,
  CreateButton,
} from "./Login.style";

const Login = () => {
  const history = useHistory();
  return (
    <LoginContainer>
      <LoginWrapper>
        <CloseButton onClick={() => history.replace("/")}>Close</CloseButton>
        <span>
          <LoginImage src={DisplayImage} alt="login-image" />
        </span>
        <span>
          <LoginContent>
            <LoginHeader>Welcome Back &nbsp; :)</LoginHeader>
            <LoginInputContainer>
              <LoginInput placeholder="Email" type="email" />
              <LoginInput placeholder="Password" type="password" />

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <LoginButton>Login</LoginButton>
                <CreateButton to="/signup">Create Account</CreateButton>
              </div>
            </LoginInputContainer>
            <RegisterLink>
              Not yet a member?&nbsp;<NavLink to="/signup">Sign up</NavLink>
            </RegisterLink>
          </LoginContent>
        </span>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
