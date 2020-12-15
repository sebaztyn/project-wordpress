import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentButton = styled.button`
  padding: 10px 2rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.complimentaryColor};
  color: ${(props) => props.theme.primaryColor};
  border: solid 1px transparent;
  font-size: 22px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    color: ${(props) => props.theme.complimentaryColor};
    background-color: ${(props) => props.theme.primaryColor};
  }
`;
