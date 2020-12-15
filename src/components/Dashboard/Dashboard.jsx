import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Payment from "../PaymentDashboard/Payment";
import RegistrationReview from "../RegistrationReview/RegistrationReview";
import Stepper from "../Stepper/Stepper";
import { DashboardContainer } from "./Dashboard.style";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  console.log("path :>> ", path);
  console.log("url :>> ", url);
  return (
    <DashboardContainer>
      <Stepper />
      <Switch>
        <Route path={`${path}`} component={Payment} exact />
        <Route path={`${path}/review`} component={RegistrationReview} />
      </Switch>
    </DashboardContainer>
  );
};

export default Dashboard;
