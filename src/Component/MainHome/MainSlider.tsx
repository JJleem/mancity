import {
  StyleSlider,
  Sliders,
  SliderContainer,
  SliderImg,
  Overlay,
  SliderDesc,
  SliderDescSub,
  SliderDescTitle,
} from "./StyleMainSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const MainSlider = () => {
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
    autoplaySpeed: 4500,
    pauseOnHover: true,
  };

  const [dotButtons, setDotButtons] = useState<NodeListOf<Element> | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [subText, setSubText] = useState<string>(
    "GUARDIOLA GIVES TRANSFER UPDATE"
  );
  const navigate = useNavigate();
  const [go, setGo] = useState("/news/1");
  const handleGo = () => {
    navigate(go);
  };
  const updateSubText = (index: number | null) => {
    switch (index) {
      case 0:
        setSubText("GUARDIOLA GIVES TRANSFER UPDATE");
        setGo("/news/1");
        break;
      case 1:
        setSubText("LOREM IPSUM DOLLAR IPSUM@22222");
        setGo("/news/2");
        break;
      case 2:
        setSubText("LOREM IPSUM DOLLAR IPSUM@33333");
        setGo("/news/3");
        break;
      case 3:
        setSubText("LOREM IPSUM DOLLAR IPSUM@44444");
        setGo("/news/4");
        break;
      default:
        setSubText("GUARDIOLA GIVES TRANSFER UPDATE");
        setGo("/news/1");
        break;
    }
  };

  useEffect(() => {
    const dotButtonsTemp = document.querySelectorAll(".slick-dots li");
    setDotButtons(dotButtonsTemp);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const activeButton = Array.from(dotButtonsTemp).findIndex((button) =>
            button.classList.contains("slick-active")
          );
          setActiveIndex(activeButton);
          updateSubText(activeButton);
        }
      });
    });

    if (dotButtonsTemp) {
      dotButtonsTemp.forEach((button) => {
        observer.observe(button, {
          attributes: true,
          attributeFilter: ["class"],
        });
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <SliderContainer className="slider-container">
      <SliderDesc>
        <SliderDescSub>
          <p>Men's Team</p>
        </SliderDescSub>

        <SliderDescTitle>
          <p onClick={handleGo}>{subText}</p>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleGo}
          >
            <mask
              id="mask0_51_284"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_51_284)">
              <path
                d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z"
                fill="white"
              />
            </g>
          </svg>
        </SliderDescTitle>
      </SliderDesc>
      <StyleSlider ref={sliderRef} {...settings}>
        <Sliders>
          <SliderImg
            img={
              "https://www.mancity.com/meta/media/01ibqb4w/pg-wide-overlay.jpg?width=1620&mode=fill"
            }
          >
            <Overlay />
          </SliderImg>
        </Sliders>
        <Sliders>
          <SliderImg
            img={
              "https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1600%2Cc_fill/q_auto/v1681631997/cms/public/images/fcbayern-com/homepage/Saison-22-23/Gegner/Manchester%20City/230415-haaland-mancity-leicester-get.jpg"
            }
          >
            <Overlay />
          </SliderImg>
        </Sliders>
        <Sliders>
          <SliderImg
            img={
              "https://media.cnn.com/api/v1/images/stellar/prod/230517173313-06-champions-league-man-city-real-madrid-semifinals-spt-intl.jpg?c=original"
            }
          >
            <Overlay />
          </SliderImg>
        </Sliders>
        <Sliders>
          <SliderImg
            img={
              "https://www.mancity.com/meta/media/eu3h01vo/celtic-extended-wide.jpg?width=1290"
            }
          >
            <Overlay />
          </SliderImg>
        </Sliders>
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
  );
};

export default MainSlider;
