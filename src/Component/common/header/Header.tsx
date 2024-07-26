import React from "react";
import {
  HeaderContainer,
  HeaderInner,
  HeaderLogo,
  Icon,
  IconLogo,
  IconSection,
  MenuSection,
} from "./StyleHeader";
import { Link } from "react-router-dom";
import language from "../../../assets/img/icon/language.png";
import account from "../../../assets/img/icon/account_circle.png";
import sponser from "../../../assets/img/icon/wix_homepage_v2.png.png";
import toggle from "../../../assets/img/icon/toggle.png";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/">
          <HeaderLogo />
        </Link>

        <MenuSection>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/">VIDEO</Link>
          </li>
          <li>
            <Link to="/">FIXTURES</Link>
          </li>
          <li>
            <Link to="/">TICKETS</Link>
          </li>
          <li>
            <Link to="/">SHOP</Link>
          </li>
          <li>
            <Link to="/">PLAYERS</Link>
          </li>
          <li>
            <Link to="/">CLUB</Link>
          </li>
          <li>
            <Link to="/">HELP</Link>
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
          <Icon>
            <IconLogo logo={sponser}></IconLogo>
          </Icon>
          <Icon>
            <IconLogo logo={toggle}></IconLogo>
          </Icon>
        </IconSection>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
