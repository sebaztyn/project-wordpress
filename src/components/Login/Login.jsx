import React, { useContext } from "react";
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
import { loginContext } from "../../Context/LoginContext.js";
import Notification from "../Notification/Notification";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const history = useHistory();
  const {
    loginData,
    notificationResponse,
    submitHandler,
    changeHandler,
    loading,
  } = useContext(loginContext);

  return (
    <>
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
                <LoginInput
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  value={loginData.email}
                />
                <LoginInput
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={loginData.password}
                />

                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <LoginButton onClick={submitHandler}>
                    {" "}
                    {loading ? <Spinner /> : "Login"}
                  </LoginButton>
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
      {notificationResponse.status && notificationResponse.list.length && (
        <Notification response={notificationResponse.list} />
      )}
      {notificationResponse.response &&
        typeof notificationResponse.response === "string" && (
          <Notification
            response={notificationResponse.response}
            color={notificationResponse.color}
          />
        )}
    </>
  );
};

export default Login;
