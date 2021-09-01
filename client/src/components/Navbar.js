/** @format */

import React, { useState } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import "./Toggle.css";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const state = useSelector((state) => state);

  console.log(state);
  const storeItems = useSelector(getStoreItemArray);
  console.log("storeItems", storeItems);
  const totalCost = storeItems.reduce(
    (sum, i) => (sum += i.quantity * i.MSRP),
    0.0
  );
  console.log("totalCost", totalCost);

  const NoOfItems = storeItems.reduce((sum, i) => (sum += i.quantity), 0.0);
  console.log("NoOfItems", NoOfItems);

  const DrawerContents = () => (
    <>
      <Wrapper>
        <ItemWrapper>
          {storeItems.map((items, _id) => (
            <CartItem
              key={_id}
              id={items._id}
              itemName={items.itemName}
              vendorName={items.vendorName}
              MSRP={items.MSRP}
              // quantity={items.quantity}
              itemLink={items.itemLink}
            />
          ))}
        </ItemWrapper>

        <Totals>
          <TotalText>Total:</TotalText>
          <TotalNumbers>${totalCost}</TotalNumbers>
        </Totals>
        <CheckoutButton>
          <InnerCheckoutButton>CHECKOUT</InnerCheckoutButton>
        </CheckoutButton>
      </Wrapper>
    </>
  );

  const Drawer = ({ isOpen }) => (
    <div
      className={`Drawer__Container ${
        isOpen ? "Drawer__Container--isOpen" : ""
      }`}
    >
      <DrawerContents />
    </div>
  );
  return (
    <>
      <NavbarWrapper>
        <Drawer isOpen={isOpen} />
        <NavbarText>Fülhaus Shop</NavbarText>
        <Button onClick={toggleDrawer}>
          <InsideButton>CART</InsideButton>
        </Button>
      </NavbarWrapper>
    </>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  z-index: 1000;
`;

const Wrapper = styled.div`
  border-top: 1px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 2000px;
  /* @media (max-width: 1440px) {
    width: 600px;
  } */
`;
const ItemWrapper = styled.div`
  width: 546px;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const NavbarText = styled.div`
  width: 255px;
  height: 79px;
  margin-left: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
  @media (max-width: 690px) {
    font-size: 26px;
  }
`;
const Button = styled.button`
  width: 150px;
  height: 58px;
  margin-top: 11px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  padding: 0;
  border: none;
  @media (max-width: 690px) {
    margin-top: 20px;
    width: 100px;
    height: 40px;
  }
`;
const InsideButton = styled.div`
  margin-top: 3px;
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
  @media (max-width: 690px) {
    font-size: 20px;
  }
`;

const Totals = styled.div`
  width: 541px;
  height: 78px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
`;
const TotalText = styled.div``;
const TotalNumbers = styled.div``;
const CheckoutButton = styled.button`
  width: 546px;
  height: 91px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
const InnerCheckoutButton = styled.div`
  width: 340px;
  height: 124.67px;
  z-index: 1;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
`;
