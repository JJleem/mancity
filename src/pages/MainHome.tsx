import {
  MainHomeContainer,
  MainHomeInner,
  StyleSlider,
  Sliders,
  SliderContainer,
} from "./StyleMainHome";
import Footer from "../Component/common/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

const MainHome = () => {
  const sliderRef = useRef<Slider>(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <MainHomeContainer>
      <MainHomeInner>
        <SliderContainer className="slider-container">
          <h2>Auto Play {"&"} Pause with buttons</h2>
          <StyleSlider ref={sliderRef} {...settings}>
            <Sliders>1</Sliders>
            <div>2</div>
            <Sliders>3</Sliders>
            <div>4</div>
          </StyleSlider>
          {/* <div style={{ textAlign: "center" }}>
            <button className="button" onClick={play}>
              Play
            </button>
            <button className="button" onClick={pause}>
              Pause
            </button>
          </div> */}
        </SliderContainer>
      </MainHomeInner>
      <Footer />
    </MainHomeContainer>
  );
};

export default MainHome;
