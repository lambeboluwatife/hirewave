import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 100px;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 346px;
`;
export const DreamBg = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 100px;
  left: 100px;
  bottom: 0;
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const DreamContent = styled.div`
  /* max-width: 1240px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  gap: 42px;
`;

export const DreamTitle = styled.h1`
  font-family: "Open Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  color: #fff;
`;

export const FieldContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background: #090020;
  gap: 34px;
  flex-wrap: wrap;
  /* width: 100%; */
  max-width: 974px;
  align-items: center;
  padding: 12px 40px 33px 32px;
  justify-content: flex-start;
`;

export const InputFieldWrapper = styled.div`
  /* display: grid; */
  width: 357px;
  /* width: 100%; */
`;

export const Label = styled.label`
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #fff;
`;

export const FieldInput = styled.input`
  border-radius: 10px;
  background: #fff;
  width: 100%;
  padding: 12px 16px;
  height: 50px;
`;
export const ButtonWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: end;
`;

export const FieldButton = styled.button`
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ffa500;
  transition: all 0.5s ease-in-out;
  color: #000;
  /* align-self: center; */

  &:hover {
    border: 1px solid #ffa500;
    background: #fff;
    transform: translateX(1.5);
    color: #ffa500;
  }
`;
