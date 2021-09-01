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
        <Image src={logo} alt="Logo" />
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
  width: 94vw;

  /* width: 100%; */
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 94vw;
  /* width: 100%; */
`;
const ImageBanner = styled.div`
  width: 93vw;
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* width: 100%;
  display: flex; */

  /* justify-content: center;
  align-items: center; */
  /* width: 100vw;

  /* @media (max-width: 1348px) {
    width: 872px;
  } */
`;
