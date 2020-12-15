import { useContext } from "react";
import { dashboardContext } from "../../Context/DashboardContext";
import { PaymentButton, PaymentContainer } from "./Payment.style";

const Payment = () => {
  const { openPaymentHandler, onPaymentClose, onPaymentSuccess } = useContext(
    dashboardContext,
  );
  return (
    <PaymentContainer>
      <PaymentButton
        onClick={() => openPaymentHandler(onPaymentSuccess, onPaymentClose)}
      >
        Make payment
      </PaymentButton>
    </PaymentContainer>
  );
};

export default Payment;
