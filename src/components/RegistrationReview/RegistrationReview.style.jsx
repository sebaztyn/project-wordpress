import styled from "styled-components";

export const RegistrationReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegistrationReviewText = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  max-width: 70vw;
  margin: auto;
  text-align: center;
  /* background-color: ${(props) => props.theme.primaryColor}; */
`;
