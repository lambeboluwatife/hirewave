import React from "react";
import toju from "../../asset/toju.png";
import bubble from "../../asset/Chat Bubble Oval Quotation.png";
import {
  Bubble,
  CardDescription,
  CardImg,
  CardName,
  CardTextWrapper,
  CardTitle,
  Heading,
  TesCard,
  TesContainer,
} from "./testimonial.style";

const Testimonial = () => {
  return (
    <TesContainer>
      <Heading>Testimonials</Heading>
      <TesCard>
        <CardImg src={toju} alt="user photo" />
        <CardTextWrapper>
          <CardName>Alero Toju</CardName>
          <CardTitle>HR at Polished Beauty</CardTitle>
          <CardDescription>
            Thanks to Hirewave, I landed my dream job in no time. User-friendly
            interface, relevant listings, and constant updates made all the
            difference!
          </CardDescription>
        </CardTextWrapper>
        <Bubble src={bubble} alt="quotation" />
      </TesCard>
    </TesContainer>
  );
};

export default Testimonial;
