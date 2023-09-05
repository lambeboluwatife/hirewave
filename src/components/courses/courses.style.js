import styled from "styled-components";

export const CourseContainer = styled.div`
  margin-left: 100px;
  text-align: left;

  @media screen and (max-width: 1280px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
`;

export const Heading = styled.h2`
  color: #020c18;

  /* Heading/h2 */
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.28px;

  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: #6d6d6d;
  margin: 20px 0 48px;
  max-width: 632px;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
