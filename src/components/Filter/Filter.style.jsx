import styled from "styled-components";

export const FilterContainer = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 600px;
  margin-left: auto;
  grid-template-columns: repeat(
    ${(props) => (props.length ? props.length : 2)},
    minmax(200px, 1fr)
  );
  /*  justify-content: flex-end; */
  padding: 10px;
  & > div {
    flex: 1;
  }
`;
export const FilterContentContainer = styled.div`
  /* position: relative;
  ul {
    position: absolute;
  } */
`;
