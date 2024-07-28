import React, { useState } from "react";
import {
  TitleBoxSub,
  TitleBox,
  TitleBoxImg,
  TitleBoxOverlay,
  TitleBoxTitle,
} from "../../../MainHome/mainNews/StyleMainNewsSection";
import newsdb from "../../../../data/newsDb.json";
import { useNavigate } from "react-router-dom";
import {
  NewsContainer,
  NewsWrap,
  SeeMore,
  SeeMoreSection,
} from "./StyleTabsAll";
const newsMainImg = newsdb.newsPage.map((newsItems) => newsItems.img);
const TabsAll = () => {
  const navigate = useNavigate();
  const onNews = (id: string) => {
    navigate(id);
  };
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <NewsContainer>
      <NewsWrap>
        {newsdb.newsPage.slice(0, visibleCount).map((newsItem, index) => (
          <TitleBox
            key={newsItem.id}
            onClick={() => onNews(`/news/${newsItem.id}`)}
            style={{
              width: "100%",
              cursor: "pointer",
              borderBottom: "1px solid #000",
              paddingBottom: " 12px",
              height: "100%",
            }}
          >
            <TitleBoxImg imgs={newsItem.img}>
              <TitleBoxOverlay></TitleBoxOverlay>
            </TitleBoxImg>
            <TitleBoxTitle>{newsItem.title}</TitleBoxTitle>
            <TitleBoxSub>{newsItem.subdesc}</TitleBoxSub>
          </TitleBox>
        ))}
      </NewsWrap>
      {visibleCount < newsdb.newsPage.length && (
        <SeeMoreSection>
          <SeeMore onClick={loadMore}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <mask maskUnits="userSpaceOnUse"></mask>
              <g mask="url(#mask0_51_125)">
                <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" />
              </g>
            </svg>
          </SeeMore>
        </SeeMoreSection>
      )}
    </NewsContainer>
  );
};

export default TabsAll;
