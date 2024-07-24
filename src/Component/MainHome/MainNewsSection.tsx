import React from "react";
import {
  Gif,
  NewsSection,
  NewsSectionBg,
  NewsSectionInner,
} from "./StyleMainNewsSection";

const MainNewsSection = () => {
  return (
    <NewsSection>
      <NewsSectionBg />
      <NewsSectionInner></NewsSectionInner>
    </NewsSection>
  );
};

export default MainNewsSection;
