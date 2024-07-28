import Footer from "../Component/common/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import MainSlider from "../Component/MainHome/mainSlider/MainSlider";
import MainNewsSection from "../Component/MainHome/mainNews/MainNewsSection";
import MainRankSection from "../Component/MainHome/mainRank/MainRankSection";
import MainNextMatch from "../Component/MainHome/MainNextMatch/MainNextMatch";
import {
  Gif,
  GifTwo,
} from "../Component/MainHome/mainNews/StyleMainNewsSection";
import { MainHomeContainer, MainHomeInner } from "./MainHome/StyleMainHome";

const MainHome = () => {
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
  console.log(scrollY);
  return (
    <MainHomeContainer>
      <MainHomeInner>
        <MainSlider />
      </MainHomeInner>
      <MainRankSection />
      <MainNextMatch />
      <Gif scroll={scrollY} />
      <MainNewsSection />
      <GifTwo scroll={scrollY} />
      <Footer />
    </MainHomeContainer>
  );
};

export default MainHome;
