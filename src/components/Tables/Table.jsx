import React from "react";
import { TableContainer, TableHeader } from "./Table.style.jsx";

const Table = () => {
  return (
    <TableContainer>
      <TableHeader columnCount={5}>
        <span>FIrst Name</span>
        <span>Last Name</span>
        <span>Payment Status</span>
        <span>Phone</span>
        <span>Email</span>
      </TableHeader>
    </TableContainer>
  );
};

export default Table;
