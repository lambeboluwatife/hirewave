import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  top: -74px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 100px;
  justify-content: space-between;
  align-items: center;
  height: 700px;
  /* z-index: 1; */
  gap: 79px;
`;

export const HeroImg = styled.img`
  display: flex;
  max-width: 630px;
  max-height: 803px;
  width: 100%;
  height: 100%;
  z-index: -1;
  justify-self: end;
`;

export const HeroContent = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const HeroH1 = styled.h1`
  color: #020c18;
  font-family: Open Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 80px */
`;

export const HeroPara = styled.p`
  color: #6d6d6d;

  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  max-width: 462px;
`;

export const FormBox = styled.form`
  max-width: 373px;
  margin-top: 48px;
  position: relative;
`;

export const FormInput = styled.input`
  padding: 12px 15px;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border: 0;
  outline: 0;
  width: 100%;
  border: 0.5px solid #020c18;
  border-radius: 10px;

  &::placeholder {
    color: rgba(109, 109, 109, 0.37);
  }
`;

export const FormButton = styled.button`
  border-radius: 10px;
  color: #fff;
  border: 0;
  background: #4d73f8;
  padding: 6px 12px;
  position: absolute;
  right: 2.5px;
  top: 2.5px;
  z-index: 1;
  font-size: 20px;
  cursor: pointer;
`;
