import Slider from "react-slick";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const MainHomeContainer = styled.div`
  width: 100%;
  /* padding-top: 78px; */
  padding-bottom: 830px;
  position: relative;
  border: 1px solid #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;
export const MainHomeInner = styled.div`
  width: 100%;

  /* padding: 0 18px; */
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const SliderContainer = styled.div`
  width: 100%;
  border: 1px solid #f00;
  height: 100vh;
`;
export const Sliders = styled.div`
  /* position: absolute;
  top: 0; */
  width: 1920px;
  height: 920px;
  z-index: 100;
  background-image: url("https://www.mancity.com/meta/media/1kcbehwa/managerspreview_wide_celtic.jpg?width=645&height=364&mode=crop");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: #000; */
  opacity: 0.8;
  color: #fff;
`;
export const StyleSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-dots {
    border: 1px solid #f00;
  }

  .slick-dots li {
    margin: 0 5px;
    width: 100px;
  }

  .slick-dots li button {
    border: 1px solid #ff0;
  }

  .slick-dots li.slick-active button {
    background: #333;
    border: 1px solid #f0f;
  }
  .slick-dots li button:before {
    content: "";
  }
`;
