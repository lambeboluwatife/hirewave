import React from "react";
import Hero from "../components/RHero/Hero";
import Course from "../components/course/Course";
import Community from "../components/Community/Community";
import Service from "../components/RService/Service";
import Blog from "../components/blog/Blog";
import Testimonial from "../components/testimonial/Testimonial";
import Courses from "../components/courses/Courses";

const Resource = () => {
  return (
    <>
      <Hero />
      <Course />
      <Community />
      <Service />
      <Blog />
      <Courses />
      <Testimonial />
    </>
  );
};

export default Resource;
