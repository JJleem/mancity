import React, { useEffect, useState } from "react";
import {
  MoreNews,
  MoreNewsBtn,
  NewsSectionInner,
  TitleBox,
  TitleBoxImg,
  TitleBoxOverlay,
  TitleBoxSub,
  TitleBoxTitle,
  TitleNewsBox,
  TitleSection,
} from "../mainNews/StyleMainNewsSection";
import { useNavigate } from "react-router-dom";
import db from "../../../data/db.json";
import {
  Button,
  ButtonContainer,
  LatestMatchBottomInner,
  LatestMatchBottomInnerInfo,
  LatestMatchBottomInnerLogo,
  LatestMatchBottomInnerText,
  LatestMatchSection,
  LatestMatchTopInner,
} from "../mainRank/StyleMainRank";
import city from "../../../assets/img/logo/mainlogo.png";
import leicester from "../../../assets/img/logo/Leicester_City_crest.png";
import { WomenSection, WomenWrapper } from "./StyleMainWomen";
import { NewsTabsState } from "../../../atom/atom";
import { useRecoilState } from "recoil";
const MainWomen = () => {
  const navigate = useNavigate();
  const onNews = (id: string) => {
    navigate(id);
  };
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
  const [tabs, setTabs] = useRecoilState(NewsTabsState);
  const handleTabClick = (tab: string) => {
    setTabs((prevTabs: any) => ({
      ...prevTabs,
      [tab]: true,
      all: tab === "all",
      men: tab === "men",
      women: tab === "women",
      academy: tab === "academy",
      club: tab === "club",
    }));
    navigate("/news");
  };
  return (
    <WomenSection scroll={scrollY}>
      <NewsSectionInner>
        <TitleSection>
          <span>WOMEN's</span>TEAM
        </TitleSection>
        <WomenWrapper>
          <TitleNewsBox>
            {db.womenNews.map((newsItem, index) => (
              <TitleBox
                key={newsItem.id}
                onClick={() => onNews(`/news/${newsItem.id}`)}
              >
                <TitleBoxImg imgs={newsItem.img}>
                  <TitleBoxOverlay>
                    <span style={{ width: "48px", height: "48px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#FFFFFF"
                      >
                        <path d="m380-300 280-180-280-180v360ZM200-120q-33   " />
                      </svg>
                    </span>
                  </TitleBoxOverlay>
                </TitleBoxImg>
                <TitleBoxTitle>{newsItem.title}</TitleBoxTitle>
                <TitleBoxSub>{newsItem.subdesc}</TitleBoxSub>
              </TitleBox>
            ))}
          </TitleNewsBox>
          <LatestMatchSection
            style={{ width: "500px", height: "100%" }}
            id="match"
          >
            <LatestMatchTopInner>
              NEXT <span>FIXTURE</span>
            </LatestMatchTopInner>
            <LatestMatchBottomInner>
              <LatestMatchBottomInnerInfo>
                <LatestMatchBottomInnerLogo
                  logo={city}
                ></LatestMatchBottomInnerLogo>
                <LatestMatchBottomInnerText>
                  <div>2024.08.28</div>
                  <div>FRIENDLY</div>
                  <div>VS</div>
                  <div>HBF Park, Perth, WA</div>
                </LatestMatchBottomInnerText>
                <LatestMatchBottomInnerLogo
                  logo={leicester}
                ></LatestMatchBottomInnerLogo>
              </LatestMatchBottomInnerInfo>
              <ButtonContainer>
                <Button>BUY TICKETS</Button>
              </ButtonContainer>
            </LatestMatchBottomInner>
          </LatestMatchSection>
        </WomenWrapper>
      </NewsSectionInner>
      <MoreNews>
        <MoreNewsBtn onClick={() => handleTabClick("women")}>
          More News
        </MoreNewsBtn>
      </MoreNews>
    </WomenSection>
  );
};

export default MainWomen;
