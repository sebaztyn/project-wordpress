import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RegistrationReviewContainer,
  RegistrationReviewText,
} from './RegistrationReview.style';

const RegistrationReview = () => {
  const navigate = useNavigate();
  return (
    <RegistrationReviewContainer>
      <RegistrationReviewText>
        <span style={{ fontSize: '18px', fontWeight: 700 }}>
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
        <div>
          <button onClick={() => navigate('/', { replace: true })}>
            Return to home
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/', { replace: true });
            }}
          >
            Logout
          </button>
        </div>
      </RegistrationReviewText>
    </RegistrationReviewContainer>
  );
};

export default RegistrationReview;
