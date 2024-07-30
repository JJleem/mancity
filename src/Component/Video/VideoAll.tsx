import React, { useState } from "react";

import newsdb from "../../data/newsDb.json";
import { useNavigate } from "react-router-dom";
import { NewsContainer } from "../../pages/News/StyleNews";
import {
  NewsWrap,
  SeeMore,
  SeeMoreSection,
} from "../news/tabs/all/StyleTabsAll";
import {
  TitleBoxSub,
  TitleBox,
  TitleBoxImg,
  TitleBoxOverlay,
  TitleBoxTitle,
} from "../MainHome/mainNews/StyleMainNewsSection";
import { InfoSection } from "../../pages/Fixtures/StyleFixtures";

const newsMainImg = newsdb.newsPage.map((newsItems) => newsItems.img);
const VideoAll = () => {
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
      <InfoSection style={{ marginTop: "-96px" }}>
        <NewsWrap>
          {newsdb.newsPage
            .filter(
              (newsItem) =>
                newsItem.subdesc === "MATCH HIGHLIGHTS" ||
                newsItem.subdesc === "INTERVIEWS" ||
                newsItem.subdesc === "BEHIND THE SCENES"
            )
            .slice(0, visibleCount)
            .map((newsItem, index) => (
              <TitleBox
                key={newsItem.id}
                onClick={() => onNews(`/news/${newsItem.id}`)}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  borderBottom: "1px solid #fff",
                  paddingBottom: " 12px",
                  height: "100%",
                }}
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
                <TitleBoxTitle style={{ color: "white" }}>
                  {newsItem.title}
                </TitleBoxTitle>
                <TitleBoxSub>{newsItem.subdesc}</TitleBoxSub>
              </TitleBox>
            ))}
        </NewsWrap>
        {visibleCount < newsdb.newsPage.length && (
          <SeeMoreSection style={{ marginBottom: "48px", marginTop: "48px" }}>
            <SeeMore onClick={loadMore} style={{ background: "white" }}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "white" }}
              >
                <mask maskUnits="userSpaceOnUse"></mask>
                <g mask="url(#mask0_51_125)">
                  <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" />
                </g>
              </svg>
            </SeeMore>
          </SeeMoreSection>
        )}
      </InfoSection>
    </NewsContainer>
  );
};

export default VideoAll;
