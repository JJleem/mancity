import Slider from "react-slick";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const MainHomeContainer = styled.div`
  width: 100%;
  /* padding-top: 78px; */
  padding-bottom: 2000px;
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
  height: 100%;
`;
export const Sliders = styled.div`
  width: 100vw;
  height: 960px;
  z-index: 100;

  opacity: 0.8;
  color: #fff;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 960px;
  }
`;
export const SliderImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://www.mancity.com/meta/media/1kcbehwa/managerspreview_wide_celtic.jpg?width=645&height=364&mode=crop");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const StyleSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  position: relative;

  .slick-dots {
    bottom: 4%;
    right: -15%;
    gap: 0;
  }

  .slick-dots li {
    width: 250px;
    height: 150px;
  }

  .slick-dots li button {
    width: 100%;
    height: 100%;
    background-image: url("https://www.mancity.com/meta/media/1kcbehwa/managerspreview_wide_celtic.jpg?width=645&height=364&mode=crop");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 4px #000;
  }

  .slick-dots li.slick-active button {
    background: #333;
  }
  .slick-dots li button:before {
    content: "";
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    .slick-dots {
      bottom: 4%;
      right: -10%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    .slick-dots li {
      width: 200px;
      height: 100px;
    }
    .slick-dots {
      bottom: 4%;
      right: -5%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    .slick-dots li {
      width: 160px;
      height: 100px;
    }
    .slick-dots {
      bottom: 4%;
      right: 0%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    .slick-dots li {
      width: 110px;
      height: 80px;
    }
    .slick-dots {
      bottom: 4%;
      right: 0%;
    }
  }
`;
