import React from "react";
import { PagContainer } from "../Pagination/pagination.style";
import sketch from "../../asset/EcoSketch.png";
import {
  BlogButton,
  BlogCardWrapper,
  BlogContainer,
  Card,
  CardImg,
  CardPara,
  CardTextWrapper,
  CardTitle,
  LeftBox,
  LeftImg,
  LeftPara,
  LeftTitle,
  Paragraph,
  RightBox,
  SpanBtn,
  Title,
  TitleBox,
} from "./blog.style";
import { blogOption } from "../../data/text";

const Blog = () => {
  return (
    <BlogContainer>
      <TitleBox>
        <Title>Blog</Title>
        <Paragraph>
          Explore insightful articles on career growth, job hunting tips,
          interview strategies, and workplace success to boost your professional
          journey.
        </Paragraph>
      </TitleBox>
      <BlogCardWrapper>
        <LeftBox>
          <LeftImg src={sketch} />
          <LeftTitle>
            Mastering your Job Search: The Ultimate Guide to Landing Your Dream
            Job.
          </LeftTitle>
          <LeftPara>
            In today’s competitive job market, finding the perfect job can be a
            daunting task. However, with the right strategies...
            <SpanBtn>read more </SpanBtn>
          </LeftPara>
        </LeftBox>
        <RightBox>
          {blogOption.map((option, index) => (
            <Card key={index}>
              <CardImg src={option.img} />
              <CardTextWrapper>
                <CardTitle>{option.title}</CardTitle>
                <CardPara>{option.description}</CardPara>
              </CardTextWrapper>
            </Card>
          ))}
        </RightBox>
      </BlogCardWrapper>
      <BlogButton>View All</BlogButton>
    </BlogContainer>
  );
};

export default Blog;
