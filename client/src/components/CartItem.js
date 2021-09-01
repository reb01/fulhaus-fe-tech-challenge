/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../actions";
import logo from "../assets/Cross.jpg";

const CartItem = ({ id, itemName, vendorName, itemLink, MSRP }) => {
  const dispatch = useDispatch();
  return (
    <>
      {id && (
        <>
          <FlexWrapper>
            <ItemWrapper>
              <Image src={itemLink} alt={"item"} />
              <RowWrapper>
                <ColumnWrapper>
                  <NamesWrapper>
                    <ProductName>{itemName}</ProductName>
                    <BrandName>{vendorName}</BrandName>
                  </NamesWrapper>
                  <Price>${MSRP}</Price>
                </ColumnWrapper>

                <Button
                  onClick={() =>
                    dispatch(
                      removeItem({
                        id,
                        itemName,
                      })
                    )
                  }
                >
                  <Image1 src={logo} alt={"item"} />
                </Button>
              </RowWrapper>
            </ItemWrapper>
            <Divider></Divider>
          </FlexWrapper>
          {/* <Quantity>Quantity:{quantity}</Quantity> */}
        </>
      )}
    </>
  );
};

const NamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image1 = styled.img`
  height: 29px;
  width: 26px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 188px;
  margin-left: 53px;
`;
const RowWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 26px;
  height: 29px;
  padding: 0;
  border: none;
  background: none;
`;

const Quantity = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  font-size: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;

  width: 546px;
  height: 267px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 31px;
`;

const Image = styled.img`
  width: 201px;
  height: 201px;
`;
const ProductName = styled.div`
  width: 300px;
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
`;
const BrandName = styled.div`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  color: #000000;
`;
const Price = styled.div`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  color: #000000;
`;
const DeleteItemButton = styled.div``;
const Divider = styled.div`
  width: 546px;
  border: 1px solid #000000;
`;
export default CartItem;
