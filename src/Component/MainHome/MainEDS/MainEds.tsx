import React, { useEffect, useState } from "react";
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
import { WomenWrapper } from "../MainWomen/StyleMainWomen";
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
import city from "../../../assets/img/logo/mainlogo.png";
import grimsby from "../../../assets/img/logo/grimsby.png";
import { EdsSection } from "./StyleMainEds";

const MainEds = () => {
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
  const edsNewsImg = db.edsNews.map((newsItems) => newsItems.img);
  return (
    <EdsSection scroll={scrollY}>
      <NewsSectionInner>
        <TitleSection>
          <span>EDS & ACADEMY</span>TEAM
        </TitleSection>
        <WomenWrapper>
          <TitleNewsBox>
            {db.edsNews.map((newsItem, index) => (
              <TitleBox
                key={newsItem.id}
                onClick={() => onNews(`/news/${newsItem.id}`)}
                imgs={edsNewsImg}
              >
                <TitleBoxImg>
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
                  logo={grimsby}
                ></LatestMatchBottomInnerLogo>
                <LatestMatchBottomInnerText>
                  <div>2024.08.27</div>
                  <div>EFL Trophy</div>
                  <div>VS</div>
                  <div>Blundell park</div>
                </LatestMatchBottomInnerText>
                <LatestMatchBottomInnerLogo
                  logo={city}
                ></LatestMatchBottomInnerLogo>
              </LatestMatchBottomInnerInfo>
              <ButtonContainer>
                <Button>No Tickets available</Button>
              </ButtonContainer>
            </LatestMatchBottomInner>
          </LatestMatchSection>
        </WomenWrapper>
      </NewsSectionInner>
      <MoreNews>
        <MoreNewsBtn>More News</MoreNewsBtn>
      </MoreNews>
    </EdsSection>
  );
};

export default MainEds;
