import { MainHomeContainer, MainHomeInner } from "./StyleMainHome";
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
import MainWomen from "../Component/MainHome/MainWomen/MainWomen";
import MainEds from "../Component/MainHome/MainEDS/MainEds";
import MainPartners from "../Component/MainHome/MainPartners/MainPartners";

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
      <MainWomen />
      <MainEds />
      <MainPartners />
      <Footer />
    </MainHomeContainer>
  );
};

export default MainHome;
