import React, { useEffect, useState } from "react";
import {
  ShopNavContainer,
  ShopNavInner,
  ShopNavUl,
} from "../../pages/Shop/StyleShop";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { activeLinkState } from "../../atom/atom";
import { useRecoilState } from "recoil";
const ShopNav = () => {
  const location = useLocation();
  const [isShop, setIsShop] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/shop")) {
      setIsShop(true);
    } else {
      setIsShop(false);
    }
  }, [location.pathname]);

  const [activeLink, setActiveLink] = useRecoilState(activeLinkState);
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <ShopNavContainer isShop={isShop}>
      <ShopNavInner>
        <ShopNavUl>
          <li className={location.pathname === "/shop/kits" ? "active" : ""}>
            <Link to="/shop/kits" onClick={() => handleLinkClick("/kits")}>
              KITS
            </Link>
          </li>
          <li
            className={
              location.pathname.startsWith("/shop/player") ? "active" : ""
            }
          >
            <Link to="/shop/player" onClick={() => handleLinkClick("/player")}>
              SHOP BUY PLAYER
            </Link>
          </li>
          <li
            className={location.pathname === "/shop/training" ? "active" : ""}
          >
            <Link
              to="/shop/training"
              onClick={() => handleLinkClick("/training")}
            >
              TRAINING
            </Link>
          </li>
          <li
            className={location.pathname === "/shop/lifestyle" ? "active" : ""}
          >
            <Link
              to="/shop/lifestyle"
              onClick={() => handleLinkClick("/lifestyle")}
            >
              LIFESTYLE
            </Link>
          </li>
          <li className={location.pathname === "/shop/gifts" ? "active" : ""}>
            <Link to="/shop/gifts" onClick={() => handleLinkClick("/gifts")}>
              GIFTS
            </Link>
          </li>
          <li className={location.pathname === "/shop/sale" ? "active" : ""}>
            <Link to="/shop/sale" onClick={() => handleLinkClick("/sale")}>
              SALE
            </Link>
          </li>
        </ShopNavUl>
      </ShopNavInner>
    </ShopNavContainer>
  );
};

export default ShopNav;
