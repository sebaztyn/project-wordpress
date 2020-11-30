import React from "react";
import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 0.3rem;
  padding-top: 1rem;
  margin: 10px;
  min-height: calc(100vh - 250px);
  background-color: ${(props) => props.theme.white};
  ${
    "" /* display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnCount},
    minmax(200px, 1fr)
  );
  grid-auto-rows: ${(props) => props.row}; */
  };
`;
export const TableHeader = styled.div`
  display: grid;
  font-weight: 800;
  font-size: 18px;
  grid-template-columns: repeat(
    ${(props) => props.columnCount},
    minmax(200px, 1fr)
  );
  grid-auto-rows: ${(props) => props.row};
  padding: 0.5rem;
  padding-bottom: 1rem;
`;
export const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnCount},
    minmax(200px, 1fr)
  );
  padding: 0.5rem;
  grid-auto-rows: ${(props) => props.row};
  &:nth-of-type(odd) {
    background-color: #ecf0f5;
  }
  :hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`;
