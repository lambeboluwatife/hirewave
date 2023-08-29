import styled from "styled-components";

export const TesContainer = styled.div`
  display: block;
  text-align: center;
`;

export const Heading = styled.h2`
  color: #020c18;
  text-align: center;
  margin: 0 auto;
  /* Heading/h2 */
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.28px;
`;

export const TesCard = styled.div`
  margin: 44px auto;
  position: relative;
  border-radius: 10px;
  border: 0.5px solid rgba(2, 12, 24, 0.7);
  background: #fff;
  max-width: 817px;
  display: flex;
  padding: 50px 54px;
  justify-content: start;
  align-items: center;
  gap: 44px;
`;

export const CardImg = styled.img`
  display: flex;
  max-width: 238px;
  width: 100%;
`;

export const CardTextWrapper = styled.div`
  text-align: left;
  max-width: 340px;
`;

export const CardName = styled.h3`
  color: #020c18;
  /* Heading/h3 */
  font-family: "Open Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardTitle = styled.h5`
  color: #3e3e3e;
  /* Heading/h5 */
  margin: 12px 0 24px;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardDescription = styled.div`
  color: #6d6d6d;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;

export const Bubble = styled.img`
  position: "absolute";
  /* right: 36px; */
  /* top: 54px; */
  max-width: 54px;
  align-self: start;
  width: 100%;
  /* display: block; */
`;
