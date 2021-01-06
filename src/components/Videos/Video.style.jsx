import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 90px);
  background-color: #ecf0f5;
`;
export const VideoTitle = styled.h3`
  margin-bottom: 3rem;
  font-size: 24px;
`;
export const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 6px;
  width: 50%;
  > * {
    margin-bottom: 1.5rem;
  }
  > label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    /* align-items: center; */
    > * {
      margin-bottom: 1rem;
    }
    > span {
      margin-bottom: 5px;
    }
  }
  .button-controls {
    > button {
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid transparent;
      outline: none;
      background-color: ${(props) => props.theme.primaryColor};
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;
      margin-top: 2rem;
      cursor: pointer;
      :focus {
        border: 1px solid transparent;
        outline: none;
      }
      &.submit-button {
        background-color: ${(props) => props.theme.primaryColor};
        color: #ffffff;
        margin-right: 2rem;
      }
      &.cancel-button {
        background-color: ${(props) => props.theme.dangerColor};
        color: #ffffff;
        transition: all 0.2s linear;
        :hover {
          border: 1px solid ${(props) => props.theme.dangerColor};
          color: ${(props) => props.theme.dangerColor};
          background-color: #ffffff;
        }
      }
    }
  }
`;
export const VideoTextInput = styled.input`
  /* display: flex; */
  padding: 10px;
  font-size: 16px;
`;
