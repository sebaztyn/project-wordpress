import React from "react";
import {
  RegistrationReviewContainer,
  RegistrationReviewText,
} from "./RegistrationReview.style";

const RegistrationReview = () => {
  return (
    <RegistrationReviewContainer>
      <RegistrationReviewText>
        <span style={{ fontSize: "18px", fontWeight: 700 }}>
          Your payment was successful.
        </span>
        <br />
        <br />
        Check back in twenty four (24) hours while we review your signup and
        payment details
        <br />
        <span>Thank you.</span>
        <br />
        <br />
        <span>Management.</span>
      </RegistrationReviewText>
    </RegistrationReviewContainer>
  );
};

export default RegistrationReview;
