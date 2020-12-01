import React from "react";
import { TableContainer, TableContent, TableHeader } from "./Table.style.jsx";

const Table = ({ columnCount, tableData }) => {
  const { rows, count } = tableData;
  return (
    <TableContainer>
      <TableHeader columnCount={columnCount}>
        <span>FIrst Name</span>
        <span>Last Name</span>
        <span>Payment Status</span>
        <span>Phone</span>
        <span>Email</span>
      </TableHeader>
      {Array.isArray(rows) &&
        rows.map((data, index) => {
          return (
            <TableContent key={index} columnCount={columnCount}>
              <span>{data.firstname}</span>
              <span>{data.lastname}</span>
              <span>{data.payment_status}</span>
              <span>{data.phone}</span>
              <span>{data.email}</span>
            </TableContent>
          );
        })}
    </TableContainer>
  );
};

const memoized = React.memo(Table);

export default memoized;
