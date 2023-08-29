import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: start;
  gap: 24px;
  margin: 48px 100px;
`;
export const FilterContainer = styled.div`
  border-radius: 10px;
  padding: 24px 24px 63px;
  width: 100%;
  /* max-width: 397px; */
`;

export const FeaturedContainer = styled.div`
  background: #fff;
`;

export const FilterTitle = styled.h2`
  color: #3e3e3e;
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;
`;
export const FilterSpan = styled.span`
  font-size: 24px;
`;

export const FilterForm = styled.div`
  max-width: 331px;
  width: 100%;
  display: grid;
  gap: 24px;
`;
export const FilterSelect = styled.select`
  /* width: 331px; */
  height: 57px;
  /* flex-shrink: 0; */
  border: 0;
  color: #6d6d6d;
  background-color: #f6fbff;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 38px;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  /* appearance: none; */
`;

export const FilterText = styled.input`
  height: 57px;
  /* flex-shrink: 0; */
  background-color: #f6fbff;
  border-radius: 10px;
  padding: 15px 20px;
  outline: 0;
  border: 0;
  margin-top: 38px;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

export const SearchTitle = styled.h3`
  color: #6d6d6d;
  margin: 25px 23px 22px;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 30px */
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 24px;
  margin-left: 17px;
  margin-bottom: 70px;
`;

export const SearchLink = styled(Link)`
  border-radius: 10px;
  border: 1px solid rgba(9, 0, 32, 0.7);
  padding: 10px 24px;
  color: #98aefa;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;

export const FeaturedTitle = styled.h2`
  color: #3e3e3e;
  /* Heading/h2 */
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;
`;

export const FeaturedOptions = styled.div`
  display: grid;
  margin-top: 24px;
  gap: 24px;
  margin-bottom: 55px;
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 0.5px solid rgba(9, 0, 32, 0.7);
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 37px;
  margin-top: 34px;
  gap: 31px;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const TextWrapper = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 36px;
`;

export const LogoTitle = styled.h4`
  color: #3e3e3e;
  /* Heading/h4 */
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
`;

export const LogoParagraph = styled.p`
  color: rgba(9, 0, 32, 0.7);
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const LogoDesWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const LogoDescripton = styled.p`
  color: #090020;
  padding: 2px 9px;
  border-radius: 10px;
  background: rgba(150, 179, 0, 0.5);
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const RightWrapper = styled.div`
  display: grid;
  margin-right: 24px;
  justify-content: end;
  align-self: center;
`;

export const SVG = styled.p`
  width: 24px;
  height: 24px;
  margin-bottom: 15px;
`;
export const RightDate = styled.p`
  color: rgba(9, 0, 32, 0.7);
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const RightLocation = styled.p`
  color: #090020;
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;
