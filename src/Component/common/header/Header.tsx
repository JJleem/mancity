import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderInner,
  HeaderLogo,
  Icon,
  IconLogo,
  IconSection,
  MenuSection,
} from "./StyleHeader";
import { Link, useLocation } from "react-router-dom";
import language from "../../../assets/img/icon/language.png";
import account from "../../../assets/img/icon/account_circle.png";
import sponser from "../../../assets/img/icon/wix_homepage_v2.png.png";
import toggle from "../../../assets/img/icon/toggle.png";
import cart from "../../../assets/img/icon/shopping_cart.png";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <HeaderLogo />
        </Link>

        <MenuSection>
          <li className={location.pathname.startsWith("/news") ? "active" : ""}>
            <Link to="/news" onClick={() => handleLinkClick("/news")}>
              NEWS
            </Link>
          </li>
          <li
            className={location.pathname.startsWith("/video") ? "active" : ""}
          >
            <Link to="/video" onClick={() => handleLinkClick("/video")}>
              VIDEO
            </Link>
          </li>
          <li
            className={location.pathname.startsWith("/fixture") ? "active" : ""}
          >
            <Link to="/fixtures" onClick={() => handleLinkClick("/fixtures")}>
              FIXTURES
            </Link>
          </li>
          <li
            className={location.pathname.startsWith("/ticket") ? "active" : ""}
          >
            <Link to="/ticket" onClick={() => handleLinkClick("/ticket")}>
              TICKETS
            </Link>
          </li>
          <li className={location.pathname.startsWith("/shop") ? "active" : ""}>
            <Link to="/shop" onClick={() => handleLinkClick("/shop")}>
              SHOP
            </Link>
          </li>
          <li
            className={location.pathname.startsWith("/player") ? "active" : ""}
          >
            <Link to="/players" onClick={() => handleLinkClick("/player")}>
              PLAYERS
            </Link>
          </li>
          <li className={location.pathname.startsWith("/club") ? "active" : ""}>
            <Link to="/club" onClick={() => handleLinkClick("/club")}>
              CLUB
            </Link>
          </li>
          <li className={location.pathname.startsWith("/help") ? "active" : ""}>
            <Link to="/help" onClick={() => handleLinkClick("/help")}>
              HELP
            </Link>
          </li>
        </MenuSection>

        <IconSection>
          <Icon>
            <IconLogo logo={language}></IconLogo> KO
          </Icon>
          <Icon>
            LOGIN
            <IconLogo logo={account}></IconLogo>
          </Icon>
          {location.pathname.startsWith("/shop") ? null : (
            <Icon>
              <IconLogo logo={sponser}></IconLogo>
            </Icon>
          )}
          {location.pathname.startsWith("/shop") && (
            <Icon>
              <IconLogo logo={cart}></IconLogo>
            </Icon>
          )}
          {location.pathname.startsWith("/shop") && (
            <Icon>
              <IconLogo logo={cart}></IconLogo>
            </Icon>
          )}
          <Icon>
            <IconLogo logo={toggle}></IconLogo>
          </Icon>
        </IconSection>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
