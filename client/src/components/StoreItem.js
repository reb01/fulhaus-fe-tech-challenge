/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../actions";

const StoreItem = ({ _id, itemName, vendorName, itemLink, MSRP }) => {
  const dispatch = useDispatch();
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(MSRP / 100);
  console.log(_id, "id");
  console.log(itemName, "itemName");

  function sendMessage() {
    alert("Item added to cart!");
  }

  function dispatchItem() {
    dispatch(addItem({ _id, itemName, MSRP, itemLink, vendorName }));
  }

  return (
    <>
      <div>{sendMessage}</div>
      <div class="container">
        <Images src={itemLink} alt={"product"} />
        <div class="after">
          <WrapperProductBrand>
            <Product>
              {itemName.replace(/ .*/, "").charAt(0) +
                itemName.replace(/ .*/, "").substring(1).toLowerCase()}
            </Product>
            <Brand>{vendorName.replace(/ .*/, "").toUpperCase()}</Brand>
          </WrapperProductBrand>
          <WrapperCartPrice>
            <Cart
              onClick={() => {
                sendMessage();
                dispatchItem();
              }}
            >
              + Add to Cart
            </Cart>
            <Price>${MSRP}</Price>
          </WrapperCartPrice>
        </div>
      </div>
    </>
  );
};
export default StoreItem;

const Product = styled.div`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 66px;
  color: #ffffff;
`;

const WrapperProductBrand = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  height: 196px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 42px;
  margin-top: 34px;
`;
const WrapperCartPrice = styled.div`
  display: flex;
  width: 320px;
  height: 120px;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 20px;
`;

const Brand = styled.div`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 66px;
  color: #ffffff;
`;
const Cart = styled.button`
  width: 158px;
  height: 52px;
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  background: none !important;
  border: none;
  padding: 0 !important;
`;
const Price = styled.div`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  color: #ffffff;
  width: 78px;
  height: 52px;
`;
const Images = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 38.8548px;
  margin-left: 34px;
  margin-right: 34px;
  margin-top: 48px;
  margin-bottom: 48px;
  opacity: 1;
  cursor: pointer;
`;
