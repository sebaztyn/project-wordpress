import React from "react";
import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 1rem;
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
  grid-template-columns: repeat(
    ${(props) => props.columnCount},
    minmax(200px, 1fr)
  );
  grid-auto-rows: ${(props) => props.row};
`;
export const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnCount},
    minmax(200px, 1fr)
  );
  grid-auto-rows: ${(props) => props.row};
`;
