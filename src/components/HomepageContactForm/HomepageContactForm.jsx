import React from "react";
import {
  ContactHeader,
  ContactContainer,
  ContactSection,
  LocationIcon,
  PhoneIcon,
  MailIcon,
} from "./HomepageContactForm.style";

const HomepageContactForm = () => {
  return (
    <>
      <ContactContainer>
        <ContactSection>
          <ContactHeader>Contact Us</ContactHeader>
          <span>
            <LocationIcon />
            <span>
              Suite B1, First Floor,Asta Galleria, Plot 1185 Parkway District,
              Cadestrial Zone B06, Mabushi, Abuja, Nigeria.
            </span>
          </span>
          <span>
            <PhoneIcon />
            <span>+2349059134244</span>
          </span>
          <span>
            <MailIcon />
            <span>info@recdel.org.ng</span>
          </span>
        </ContactSection>
        <ContactSection>
          <ContactHeader>Get in touch</ContactHeader>
          <div>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="email" placeholder="E-mail" />
              <input type="phone" placeholder="Phone Number" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Your message"
              ></textarea>
              <button>Send</button>
            </div>
          </div>
        </ContactSection>
      </ContactContainer>
    </>
  );
};

export default HomepageContactForm;
