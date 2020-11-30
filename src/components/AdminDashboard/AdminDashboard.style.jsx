import { FaUsers, FaUsersCog, FaVideo } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import styled from "styled-components";

export const AdminDashboardContainer = styled.div`
  background-color: #ecf0f5;
  min-height: 100vh;
`;
export const AdminHeader = styled.header`
  display: grid;
  grid-template-rows: minmax(200px, 350px) 1fr;
  /* background-color: #ecf0f5; */
  /* min-height: 100vh; */
`;
export const AdminDashboardCardContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(90px, 90px);
  grid-auto-rows: minmax(90px, 90px);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 10px;
`;
export const DisplayCards = styled.div`
  background-color: ${(props) => props.color || "white"};
  display: flex;
  padding: 2px;
  /* box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1); */
`;
export const IconContainer = styled.div`
  background-color: ${(props) => props.color || "yellow"};
  flex: 1;
  /* height: 100%; */
`;
export const UserIcon = styled(FaUsers)`
  color: ${(props) => props.theme.white};
  /* flex: 1; */
  display: block;
  height: 100%;
  width: 40%;
  margin: 0 auto;
`;
export const VideoIcon = styled(MdSlowMotionVideo)`
  color: ${(props) => props.theme.white};
  /* flex: 1; */
  display: block;
  height: 100%;
  width: 40%;
  margin: 0 auto;
`;
export const AdminIcon = styled(FaUsersCog)`
  color: ${(props) => props.theme.white};
  /* flex: 1; */
  display: block;
  height: 100%;
  width: 40%;
  margin: 0 auto;
`;
export const PaymentIcon = styled(SiCashapp)`
  color: ${(props) => props.theme.white};
  /* flex: 1; */
  display: block;
  height: 100%;
  width: 40%;
  margin: 0 auto;
`;
export const DataCard = styled.div`
  color: ${(props) => props.theme.primaryColor};
  flex: 2;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  padding-left: 10px;
  padding-top: 5px;
  /* align-items: center; */
  span {
    font-weight: 700;
    font-size: 24px;
    display: block;
    line-height: 1;
  }
  label {
    line-height: 1;
    display: block;
    /* text-align: center; */
    overflow-wrap: break-word;
    margin-bottom: 5px;
  }
`;
