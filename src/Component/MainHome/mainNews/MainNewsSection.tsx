import React, { useEffect, useState } from "react";
import {
  Gif,
  MoreNews,
  MoreNewsBtn,
  NewsSection,
  NewsSectionBg,
  NewsSectionInner,
  SubBox,
  SubBoxBig,
  SubNewsBox,
  SubNewsGrid,
  TitleBox,
  TitleBoxImg,
  TitleBoxImgBig,
  TitleBoxOverlay,
  TitleBoxSub,
  TitleBoxTitle,
  TitleNewsBox,
  TitleSection,
} from "./StyleMainNewsSection";
import { useNavigate } from "react-router-dom";
import db from "../../../data/db.json";
import { NewsTabsState } from "../../../atom/atom";
import { useRecoilState } from "recoil";
const newsSubImg = db.newsSub.map((newsItems) => newsItems.img);
const newsSubBigImg = db.newsSubBig.map((newsItems) => newsItems.img);
const newsMainImg = db.newsMain.map((newsItems) => newsItems.img);
const MainNewsSection = () => {
  const navigate = useNavigate();
  const onNews = (id: string) => {
    navigate(id);
  };
  const GoNewsPage = () => {
    navigate("/news");
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
    <NewsSection scroll={scrollY}>
      <NewsSectionInner>
        <TitleSection>
          <span>CLUB</span>NEWS
        </TitleSection>
        <TitleNewsBox>
          {db.newsMain.map((newsItem, index) => (
            <TitleBox
              key={newsItem.id}
              onClick={() => onNews(`/news/${newsItem.id}`)}
            >
              <TitleBoxImg imgs={newsItem.img}>
                <TitleBoxOverlay>
                  <span>
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
        <SubNewsBox>
          {db.newsSubBig.map((newsItem, index) => (
            <SubBoxBig
              key={newsItem.id}
              onClick={() => onNews(`/news/${newsItem.id}`)}
            >
              <TitleBoxImgBig imgs={newsItem.img}></TitleBoxImgBig>
              <p>{newsItem.title}</p>
              <span>{newsItem.subdesc}</span>
            </SubBoxBig>
          ))}

          <SubNewsGrid>
            {db.newsSub.map((newsItem, index) => (
              <SubBox
                key={newsItem.id}
                onClick={() => onNews(`/news/${newsItem.id}`)}
              >
                <TitleBoxImg imgs={newsItem.img}></TitleBoxImg>
                <p>{newsItem.title}</p>
                <span>{newsItem.subdesc}</span>
              </SubBox>
            ))}
          </SubNewsGrid>
        </SubNewsBox>
        <MoreNews>
          <MoreNewsBtn onClick={() => handleTabClick("men")}>
            More News
          </MoreNewsBtn>
        </MoreNews>
      </NewsSectionInner>
    </NewsSection>
  );
};

export default MainNewsSection;
