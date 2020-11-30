import React from "react";
import Header from "../Header/Header";
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

const AdminDashboard = () => {
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
              <span>2</span>
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
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
