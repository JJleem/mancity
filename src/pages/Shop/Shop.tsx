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
import PlayerSlide from "../../Component/shop/PlayerSlide";
import ShopBottomSection from "../../Component/shop/ShopBottomSection";
import ShopSummerSale from "../../Component/shop/ShopSummerSale";
import Footer from "../../Component/common/footer/Footer";
import { AddContainer } from "../Fixtures/StyleFixtures";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const navigate = useNavigate();
  const goKit = () => {
    navigate("/shop/kits");
  };
  return (
    <NewsContainer>
      <Helmet>
        <title> Manchester City - The Official Online Shop</title>
      </Helmet>
      <ShopNav />
      <ShopMainContainer>
        <ShopMainTop>DISCOVERY OUR 24/25 AWAY KIT</ShopMainTop>
        <ShopMainImgSection>
          <ShopMainImg></ShopMainImg>
        </ShopMainImgSection>
      </ShopMainContainer>
      <ShopMainSub>
        <p>COMEBACK COMPLETED</p>
        <span>
          Introducing The 2024/25 Man City Away Kit: A Certified Classic
        </span>
        <div onClick={goKit}>SHOP NOW</div>
      </ShopMainSub>
      <ShopMainPick></ShopMainPick>
      <PlayerSlide></PlayerSlide>
      <ShopBottomSection></ShopBottomSection>
      <ShopSummerSale></ShopSummerSale>
      <AddContainer logo="https://tpc.googlesyndication.com/simgad/15422444033030513763">
        Advertisement
        <div></div>
      </AddContainer>
      <Footer />
    </NewsContainer>
  );
};

export default Shop;
