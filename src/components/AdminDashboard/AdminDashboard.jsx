import React, { useContext } from "react";
import {
  AdminDashboardCardContainer,
  AdminDashboardContainer,
  DisplayCards,
  UserIcon,
  DataCard,
  IconContainer,
  AdminIcon,
  PaymentIcon,
  VideoIcon,
} from "./AdminDashboard.style";
import { NavContainer } from "../Header/Header.style";
import NavMenu from "../NavMenu/NavMenu";
import Table from "../Tables/Table";
import TableProvider, { tableContext } from "../../Context/TableContext";
import useWindowSize from "../../utils/useWindowSize";

const AdminDashboard = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const {
    tableData: { rows, count },
    adminData: { rows: adminRows, count: AdminCount },
  } = useContext(tableContext);

  console.log("AdminCount :>> ", AdminCount);
  console.log("adminRows", adminRows);
  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <AdminDashboardContainer>
        <AdminDashboardCardContainer>
          <DisplayCards>
            <IconContainer color="red">
              <UserIcon />
            </IconContainer>
            <DataCard>
              <label>Users</label>
              <span>10</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color="#108ee9">
              <AdminIcon />
            </IconContainer>
            <DataCard>
              <label>Admin</label>
              <span>{AdminCount}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color="#00a65a">
              <PaymentIcon />
            </IconContainer>
            <DataCard>
              <label>Payments</label>
              <span>2</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color="#e0751e">
              <VideoIcon />
            </IconContainer>
            <DataCard>
              <label>Video uploads</label>
              <span>2</span>
            </DataCard>
          </DisplayCards>
        </AdminDashboardCardContainer>
        <TableProvider>
          <Table columnCount={5} tableData={{ rows, count }} />
        </TableProvider>
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
