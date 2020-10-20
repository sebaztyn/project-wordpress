import React, { useContext } from "react";
import { signupContext } from "../../Context/SignupContext";
import {
  ErrorContainer,
  ErrorList,
  ErrorHeader,
  ErrorClose,
} from "./Error.style";

const ErrorContent = ({ errorList }) => {
  const { setErrorObj } = useContext(signupContext);
  return (
    <ErrorContainer>
      <ErrorClose onClick={() => setErrorObj({ status: false, list: [] })} />
      <ErrorHeader>Error(s)!</ErrorHeader>
      {Array.isArray(errorList) ? (
        errorList.map((data, index) => (
          <ErrorList key={index}>{data}</ErrorList>
        ))
      ) : (
        <div>{errorList}</div>
      )}
    </ErrorContainer>
  );
};

export default ErrorContent;
