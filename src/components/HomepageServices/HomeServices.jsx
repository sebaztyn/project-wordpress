import React, { useEffect, useRef, useState } from "react";
import {
  ServiceCard,
  ServiceCardContent,
  ServiceCardImage,
  ServiceCardParent,
  ServiceContainer,
  ServiceHeader,
  ForwardArrowIcon,
  ServiceCardImageOverlay,
  ServiceCardImageContainer,
  AddIcon,
} from "./HomeServices.styles";
import CardImageOne from "../../assets/IMG-20200213-WA0004-1.jpg";
import CardImageTwo from "../../assets/placeholder-740x440.gif";

const HomeServices = () => {
  return (
    <>
      <ServiceContainer>
        <ServiceHeader>Services</ServiceHeader>
        <ServiceCardParent>
          <ServiceCard>
            <ServiceCardImageContainer>
              <ServiceCardImage
                src={CardImageOne}
                alt="card-one"
                custom="image-one"
              />
              <ServiceCardImageOverlay>
                <AddIcon />
              </ServiceCardImageOverlay>
            </ServiceCardImageContainer>
            <ServiceCardContent>
              <h3>Financial Services</h3>
              <div>
                Companies dislike the term ‘turnaround consulting’ because it
                represents failure. The truth is that turnaround consulting
                represents success.
              </div>
              <a href="#">
                read more <ForwardArrowIcon />{" "}
              </a>
            </ServiceCardContent>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardImageContainer>
              <ServiceCardImage
                src={CardImageTwo}
                alt="card-two"
                custom="image-two"
              />
              <ServiceCardImageOverlay>
                <AddIcon />
              </ServiceCardImageOverlay>
            </ServiceCardImageContainer>
            <ServiceCardContent>
              <h3>Training</h3>
              <div>
                Bonds and commodities are much more stable than stocks and
                trades. We allow our clients to invest in the right bonds &
                commodities.
              </div>
              <a href="#">
                read more <ForwardArrowIcon />
              </a>
            </ServiceCardContent>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardImageContainer>
              <ServiceCardImage
                src={CardImageTwo}
                alt="card-three"
                custom="image-three"
              />
              <ServiceCardImageOverlay>
                <AddIcon />
              </ServiceCardImageOverlay>
            </ServiceCardImageContainer>
            <ServiceCardContent>
              <h3>Business Consultancy</h3>
              <div>
                Audit and assurance is all about meticulous data analysis.
                Everything needs to be checked, double checked, and triple
                checked.
              </div>
              <a href="#">
                read more <ForwardArrowIcon />
              </a>
            </ServiceCardContent>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardImageContainer>
              <ServiceCardImage
                src={CardImageTwo}
                alt="card-four"
                custom="image-four"
              />
              <ServiceCardImageOverlay>
                <AddIcon />
              </ServiceCardImageOverlay>
            </ServiceCardImageContainer>
            <ServiceCardContent>
              <h3>Research Survey</h3>
              <div>
                This allows us to specialize in all dimensions of trades and
                stocks, because we have a specialist within the team for every
                scenario.
              </div>
              <a href="#">
                read more <ForwardArrowIcon />
              </a>
            </ServiceCardContent>
          </ServiceCard>
        </ServiceCardParent>
      </ServiceContainer>
    </>
  );
};

export default HomeServices;
