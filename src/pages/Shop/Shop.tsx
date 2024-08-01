import React, { useState } from "react";

import { NewsContainer } from "../News/StyleNews";

import { Link } from "react-router-dom";
import ShopNav from "../../Component/shop/ShopNav";
import {
  ShopMainContainer,
  ShopMainImg,
  ShopMainImgSection,
  ShopMainSub,
  ShopMainTop,
} from "./StyleShop";
import ShopMainPick from "../../Component/shop/ShopMainPick";

const Shop = () => {
  return (
    <NewsContainer>
      <ShopNav />
      <ShopMainContainer>
        <ShopMainTop>DISCOVERY OUR 24/25 THIRD KIT</ShopMainTop>
        <ShopMainImgSection>
          <ShopMainImg></ShopMainImg>
        </ShopMainImgSection>
      </ShopMainContainer>
      <ShopMainSub>
        <p>NEVER NOT MOVING</p>
        <span>Introducing The 2024/25 Man City Third Kit</span>
        <div>SHOP NOW</div>
      </ShopMainSub>
      <ShopMainPick></ShopMainPick>
    </NewsContainer>
  );
};

export default Shop;
