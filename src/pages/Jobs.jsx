import React from "react";
import Dream from "../components/dream/Dream";
import Feature from "../components/feature/Feature";
import { Pagination } from "@mui/material";
import { Wrapper } from "../components/feature/feature.style";

const Jobs = () => {
  return (
    <>
      <Dream />
      <Feature />
      <Wrapper>
        <Pagination count={10} shape="rounded" />
      </Wrapper>
    </>
  );
};

export default Jobs;
