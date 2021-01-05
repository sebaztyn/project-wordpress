import styled from 'styled-components';

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
  > div {
    display: flex;
    max-width: 50%;
    margin: 2rem auto 0;
    justify-content: center;
    > button {
      flex: 1;
      border: none;
      outline: none;
      font-size: 18px;
      border-radius: 6px;
      cursor: pointer;
      :focus {
        border: none;
        outline: none;
      }
      :first-of-type {
        padding: 20px;
        margin-right: 1rem;
        background-color: ${(props) => props.theme.primaryColor};
        color: #ffffff;
      }
      :last-of-type {
        padding: 20px;
        margin-right: 1rem;
        background-color: #ef3833;
        color: #ffffff;
      }
    }
  }
`;
