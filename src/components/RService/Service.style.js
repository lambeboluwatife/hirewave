import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: rgba(234, 246, 255, 0.53);
  text-align: center;
  padding: 82px 100px;
`;
export const Title = styled.h3`
  color: #090020;
  /* Heading/h3 */
  font-family: "Open Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 30px */
`;

export const ServiceBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  gap: 8px;
  align-items: center;
`;
export const ServiceImg = styled.img`
  width: 100%;
  max-width: 503px;
`;

export const ServiceTextWrapper = styled.div`
  text-align: left;
`;

export const CardTitle = styled.h5`
  color: #020c18;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
`;

export const CardMenu = styled.ul`
  list-style-type: disc;
  margin-left: 24px;
  margin-bottom: 48px;
`;

export const CardList = styled.li`
  color: #6d6d6d;
  font-family: Nunito;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

export const CardButton = styled.button`
  border-radius: 10px;
  background: #4d73f8;
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 0;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #4d73f8;
    border: 1px solid #4d73f8;
    background-color: #fff;
  }
`;
