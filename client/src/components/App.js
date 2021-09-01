/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";
import CartDrawerView from "./CartItem";
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
              <Route exact path="/cart">
                <CartDrawerView />
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
  width: 1440px;
  height: 1968px;
  background: #f7efe7;
`;
const PanelDiv = styled.div`
  width: 100px;
`;
const ButtonDiv = styled.div`
  width: 100px;
`;
const Div = styled.div`
  width: 100px;
`;
const PanelContent = styled.div`
  width: 100px;
`;

const WrapperAll = styled.div`
  width: 1372px;
  height: 1968px;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  margin-left: 35px;
`;

const Button = styled.button`
  width: 300px;
  z-index: 10000;
`;
