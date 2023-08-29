import styled from "styled-components";

export const BlogContainer = styled.div`
  margin: 120px 100px 114px;
  text-align: center;
  gap: 48px;
`;
export const TitleBox = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #090020;
  margin-bottom: 24px;
  /* Heading/h2 */
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;
`;

export const Paragraph = styled.p`
  max-width: 704px;
  color: #6d6d6d;
  text-align: center;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BlogCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 75px;
  margin-bottom: 90px;
`;

export const LeftBox = styled.div`
  display: grid;
  gap: 12px;
  text-align: left;
`;

export const RightBox = styled.div`
  display: grid;
  gap: 12px;
  align-items: center;
`;

export const LeftImg = styled.img`
  max-width: 608px;
  max-height: 322px;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const LeftTitle = styled.h3`
  color: #020c18;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 607px;
`;
export const LeftPara = styled.p`
  color: #6d6d6d;
  max-width: 578px;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SpanBtn = styled.span`
  color: #96b300;
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  align-items: center;
`;
export const CardImg = styled.img`
  max-width: 241px;
  width: 100%;
  display: flex;
  border-radius: 12px;
`;
export const CardTextWrapper = styled.div`
  display: grid;
  gap: 12px;
  text-align: left;
`;

export const CardTitle = styled.h5`
  color: #020c18;
  /* Heading/h4 */
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardPara = styled.p`
  max-width: 280px;
  width: 100%;
  overflow: hidden;
  color: #6d6d6d;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BlogButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #fff;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #4d73f8;
  color: #4d73f8;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4d73f8;
    color: #fff;
  }
`;
