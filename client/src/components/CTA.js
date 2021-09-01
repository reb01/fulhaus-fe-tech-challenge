/** @format */

import React from "react";
import styled from "styled-components";

function CTA() {
  return (
    <>
      <CTAWRrapper>
        <CTAText>Patio Furniture</CTAText>
        <CTAButton style={{ outline: "none" }}>
          <InsideButton>SHOP</InsideButton>
        </CTAButton>
      </CTAWRrapper>
    </>
  );
}

export default CTA;

const CTAWRrapper = styled.div`
  border-top: 1px solid black;
  width: 94vw;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #003941;
  margin-bottom: 47px;
  z-index: 1;

  /* @media (max-width: 1370px) {
    width: 100vw;
  } */
`;
const CTAText = styled.div`
  width: 768px;
  height: 143px;
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 70px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
const CTAButton = styled.button`
  width: 150px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border: none;
`;

const InsideButton = styled.div`
  width: 150px;
  height: 55px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
