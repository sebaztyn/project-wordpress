import React from "react";
import TableProvider from "../../Context/TableContext";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  return (
    <TableProvider>
      <AdminDashboard />
    </TableProvider>
  );
};

export default React.memo(Admin);
