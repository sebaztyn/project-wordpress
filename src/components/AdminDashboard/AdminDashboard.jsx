import React, { useContext, useEffect, useState } from "react";
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
import Filter from "../Filter/Filter";

const AdminDashboard = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const [counts, setCounts] = useState({
    admin: 0,
    user: 0,
    payment: 0,
  });
  const {
    tableData: { rows, count },
    adminData: { rows: adminRows, adminCount, paymentCount, userCount },
    loading,
    selectedOption,
    setSelectedOption,
    handleChange,
  } = useContext(tableContext);

  useEffect(() => {
    if (!loading) {
      console.log("adminCount :>> ", adminCount);
      console.log("paymentCount :>> ", paymentCount);
      console.log("userCount :>> ", userCount);
      setCounts({
        ...counts,
        admin: adminCount,
        user: userCount,
        payment: paymentCount,
      });
    }
  }, [loading]);

  console.log("AdminCount :>> ", adminCount);
  console.log("adminRows", adminRows);
  console.log("loading", loading);
  console.log("counts :>> ", counts);
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
              <span>{counts.user}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color="#108ee9">
              <AdminIcon />
            </IconContainer>
            <DataCard>
              <label>Admin</label>
              <span>{counts.admin}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color="#00a65a">
              <PaymentIcon />
            </IconContainer>
            <DataCard>
              <label>Payments</label>
              <span>{counts.payment}</span>
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
        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleChange={handleChange}
        />
        <Table columnCount={5} tableData={{ rows, count }} />
      </AdminDashboardContainer>
    </>
  );
};

const memoized = React.memo(AdminDashboard);

export default memoized;
