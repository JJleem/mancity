import React from "react";
import {
  TitleBoxSub,
  TitleBox,
  TitleBoxImg,
  TitleBoxOverlay,
  TitleBoxTitle,
} from "../../../MainHome/mainNews/StyleMainNewsSection";
import db from "../../../../data/db.json";
import { useNavigate } from "react-router-dom";
import { NewsWrap } from "./StyleTabsAll";
const newsMainImg = db.newsSub.map((newsItems) => newsItems.img);
const TabsAll = () => {
  const navigate = useNavigate();
  const onNews = (id: string) => {
    navigate(id);
  };
  return (
    <NewsWrap>
      {db.newsSub.map((newsItem, index) => (
        <TitleBox
          key={newsItem.id}
          onClick={() => onNews(`/news/${newsItem.id}`)}
          imgs={newsMainImg}
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid #f00",
            height: "100%",
          }}
        >
          <TitleBoxImg>
            <TitleBoxOverlay></TitleBoxOverlay>
          </TitleBoxImg>
          <TitleBoxTitle>{newsItem.title}</TitleBoxTitle>
          <TitleBoxSub>{newsItem.subdesc}</TitleBoxSub>
        </TitleBox>
      ))}
    </NewsWrap>
  );
};

export default TabsAll;
