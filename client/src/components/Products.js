/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";

function Products() {
  const [productData, setProductData] = useState("");

  useEffect(() => {
    const url = `https://main-api.fulhaus.com/fulhaus-tech-test/get-products`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setProductData(response);
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productData, "productData");

  if (!productData) {
    return <div>loading....</div>;
  }

  return (
    <Wrapper1>
      {productData.map((item) => (
        <StoreItem key={item._id} {...item} />
      ))}
    </Wrapper1>
  );
}

export default Products;

const Wrapper1 = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  width: 1372px;
  justify-content: center;
  align-items: center;
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

const Product = styled.div`
  /* width: 296px;
  height: 196px; */
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 66px;
  color: #ffffff;
`;

const Brand = styled.div`
  /* width: 296px;
  height: 196px; */
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 66px;
  color: #ffffff;
`;

const Price = styled.div`
  /* width: 78px;
  height: 52px; */
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  color: #ffffff;
`;
