import React, { useEffect, useState } from "react";
import {
  Btn,
  MainNextMatchContainer,
  MainNextMatchInfo,
  MainNextMatchInfoText,
  MainNextMatchInner,
  MainNextMatchLogo,
  MainNextMatchText,
  Sub,
  Title,
} from "./StyleMainNextMatch";
import { useNavigate } from "react-router-dom";
import ac from "../../../assets/img/logo/acmilan.png";
import city from "../../../assets/img/logo/mainlogo.png";
import { Gif } from "../mainNews/StyleMainNewsSection";
const MainNextMatch = () => {
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

  const navigate = useNavigate();
  const handleBuyTickets = () => {
    navigate("/tickets");
  };
  return (
    <MainNextMatchContainer scroll={scrollY}>
      <MainNextMatchInner>
        <MainNextMatchText>
          <Title>
            <span>NEXT</span>MATCH
          </Title>
          <Sub>Manchester City's NEXT FIXTURE</Sub>
          <Btn onClick={handleBuyTickets}>BUY TICKETS</Btn>
        </MainNextMatchText>
        <MainNextMatchInfo>
          <MainNextMatchLogo logo={city}></MainNextMatchLogo>
          <MainNextMatchInfoText>
            <div>2024.07.27</div>
            <div>USA Tour 2024</div>
            <div>VS</div>
            <div>Yankee Stadium</div>
            <div>Kickoff at 23:00 BST</div>
          </MainNextMatchInfoText>
          <MainNextMatchLogo logo={ac}></MainNextMatchLogo>
        </MainNextMatchInfo>
      </MainNextMatchInner>
    </MainNextMatchContainer>
  );
};

export default MainNextMatch;
