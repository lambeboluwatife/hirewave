import React from "react";
import jobBg from "../../asset/jobBg.png";
import {
  ButtonWrapper,
  Container,
  DreamBg,
  DreamContent,
  DreamTitle,
  FieldButton,
  FieldContainer,
  FieldInput,
  ImageBg,
  InputFieldWrapper,
  Label,
} from "./dream.style";

const Dream = () => {
  return (
    <Container>
      <DreamBg>
        <ImageBg src={jobBg} />
      </DreamBg>
      <DreamContent>
        <DreamTitle>Find your dream job</DreamTitle>
        <FieldContainer>
          <InputFieldWrapper>
            <Label>What</Label>
            <FieldInput type="text" />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>Where</Label>
            <FieldInput type="text" />
          </InputFieldWrapper>
          <ButtonWrapper>
            <FieldButton>Search</FieldButton>
          </ButtonWrapper>
        </FieldContainer>
      </DreamContent>
    </Container>
  );
};

export default Dream;
