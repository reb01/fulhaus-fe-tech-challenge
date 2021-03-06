/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";

import GlobalStyles from "../GlobalStyles";
import Navbar from "./Navbar";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Wrapper>
        <Router>
          {" "}
          <Navbar />
          <WrapperAll>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
          </WrapperAll>
          <GlobalStyles />
        </Router>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1968px;
  background: #f7efe7;
  align-items: center;

  @media (max-width: 1348px) {
    height: 2468px;
  }
  @media (max-width: 923px) {
    height: 3700px;
  }
`;

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  height: 1968px;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;

  @media (max-width: 1348px) {
    height: 2468px;
  }
  @media (max-width: 923px) {
    height: 3700px;
  }
`;

const Button = styled.button`
  width: 300px;
  z-index: 10000;
`;
