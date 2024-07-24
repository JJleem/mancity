import { MainHomeContainer, MainHomeInner } from "./StyleMainHome";
import Footer from "../Component/common/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import MainSlider from "../Component/MainHome/MainSlider";
import MainNewsSection from "../Component/MainHome/MainNewsSection";

const MainHome = () => {
  return (
    <MainHomeContainer>
      <MainHomeInner>
        <MainSlider />
      </MainHomeInner>
      <MainNewsSection />
      <Footer />
    </MainHomeContainer>
  );
};

export default MainHome;
