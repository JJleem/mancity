import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { toggleAsideState } from "../../../atom/atom";
import {
  GasideContainer, 
  GasideInner,
  GasideSection,
  ShopContent,
  ShopSection,
} from "./StyleGaside";
import { Link, useLocation } from "react-router-dom";
const Gaside = () => {
  const [isToggle, setIsToggle] = useRecoilState(toggleAsideState);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const location = useLocation();
  const [isShop, setIsShop] = useState(false);
  const handleIsShop = () => {
    setIsShop(!isShop);
  };
  // useEffect(() => {
  //   location.pathname.startsWith("/shop") ? setIsShop(true) : setIsShop(false);
  // }, [location]);
  console.log(isShop);
  return (
    <GasideContainer isToggle={isToggle}>
      <GasideInner isShop={isShop}>
        <GasideSection
          className={location.pathname.startsWith("/news") ? "active" : ""}
        >
          <Link to="/news" onClick={handleToggle}>
            NEWS <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/video") ? "active" : ""}
        >
          <Link to="/video" onClick={handleToggle}>
            VIDEO <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/fixtures") ? "active" : ""}
        >
          <Link to="/fixtures" onClick={handleToggle}>
            FIXTURES <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/ticket") ? "active" : ""}
        >
          <Link to="/ticket" onClick={handleToggle}>
            TICKETS <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/shop") ? "active" : ""}
        >
          <Link to="/shop" onClick={handleIsShop}>
            SHOP <span></span>
          </Link>
        </GasideSection>
        {isShop ? (
          <ShopSection>
            <ShopContent
              className={location.pathname === "/shop/kits" ? "active" : ""}
            >
              <Link to="/shop/kits" onClick={handleToggle}>
                KITS
              </Link>
            </ShopContent>
            <ShopContent
              className={location.pathname === "/shop/player" ? "active" : ""}
            >
              <Link to="/shop/player" onClick={handleToggle}>
                SHOP BUY PLAYER
              </Link>
            </ShopContent>
            <ShopContent
              className={location.pathname === "/shop/training" ? "active" : ""}
            >
              <Link to="/shop/training" onClick={handleToggle}>
                TRAINING
              </Link>
            </ShopContent>
            <ShopContent
              className={
                location.pathname === "/shop/lifestyle" ? "active" : ""
              }
            >
              <Link to="/shop/lifestyle" onClick={handleToggle}>
                LIFESTYLE
              </Link>
            </ShopContent>
            <ShopContent
              className={location.pathname === "/shop/gifts" ? "active" : ""}
            >
              <Link to="/shop/gifts" onClick={handleToggle}>
                GIFTS
              </Link>
            </ShopContent>
            <ShopContent
              className={location.pathname === "/shop/sale" ? "active" : ""}
            >
              <Link to="/shop/sale" onClick={handleToggle}>
                SALE
              </Link>
            </ShopContent>
          </ShopSection>
        ) : null}

        <GasideSection
          className={location.pathname.startsWith("/players") ? "active" : ""}
        >
          <Link to="/players" onClick={handleToggle}>
            PLAYERS <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/club") ? "active" : ""}
        >
          <Link to="/club" onClick={handleToggle}>
            CLUB <span></span>
          </Link>
        </GasideSection>
        <GasideSection
          className={location.pathname.startsWith("/help") ? "active" : ""}
        >
          <Link to="/help" onClick={handleToggle}>
            HELP <span></span>
          </Link>
        </GasideSection>
      </GasideInner>
    </GasideContainer>
  );
};

export default Gaside;
