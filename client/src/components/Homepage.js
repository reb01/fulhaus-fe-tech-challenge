/** @format */

import React, { useState } from "react";
import logo from "../assets/BannerYellowChair.jpg";
import CTA from "./CTA";
import Products from "./Products";
import styled from "styled-components";

function Homepage() {
  return (
    <Wrapper>
      <ImageBanner>
        <img src={logo} alt="Logo" />
      </ImageBanner>
      <CTA />
      <Products />
    </Wrapper>
  );
}

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageBanner = styled.div`
  width: 1372px;
  height: 628px;
  @media (max-width: 1348px) {
    width: 872px;
  }
`;
