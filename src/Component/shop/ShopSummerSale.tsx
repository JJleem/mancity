import React, { useEffect, useState } from "react";
import {
  ShopMainSub,
  SummerSaleContainer,
  SummerSaleImg,
} from "../../pages/Shop/StyleShop";

const ShopSummerSale = () => {
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
    <SummerSaleContainer scroll={scrollY}>
      <SummerSaleImg />
      <ShopMainSub>
        <p>MANCHESTER CITY SUMMER SALE</p>
        <span>Get up to 70% off</span>
        <div>SHOP NOW</div>
      </ShopMainSub>
    </SummerSaleContainer>
  );
};

export default ShopSummerSale;
