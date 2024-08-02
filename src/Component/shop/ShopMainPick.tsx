import React, { useEffect, useState } from "react";
import {
  ShopMainPickBox,
  ShopMainPickBoxImg,
  ShopMainPickBoxInfo,
  ShopMainPickBoxPrice,
  ShopMainPickBoxTitle,
  ShopMainPickContainer,
  ShopMainPickContent,
  ShopMainPickInner,
  ShopMainPickTop,
} from "../../pages/Shop/StyleShop";
import shopDb from "../../data/shopDb.json";
import { NewsContainer } from "../../pages/News/StyleNews";
const ShopMainPick = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ShopMainPickContainer scroll={scrollY}>
      <ShopMainPickInner>
        <ShopMainPickTop>OUR TOP PICKS</ShopMainPickTop>
        <ShopMainPickContent>
          {shopDb.topPick.map((item, index) => (
            <ShopMainPickBox key={item.id}>
              <ShopMainPickBoxImg imgs={item.img} id="img" />
              <ShopMainPickBoxInfo>
                <ShopMainPickBoxTitle>{item.title}</ShopMainPickBoxTitle>
                <ShopMainPickBoxPrice>{item.price}</ShopMainPickBoxPrice>
              </ShopMainPickBoxInfo>
            </ShopMainPickBox>
          ))}
        </ShopMainPickContent>
      </ShopMainPickInner>
    </ShopMainPickContainer>
  );
};

export default ShopMainPick;
