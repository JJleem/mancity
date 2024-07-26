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
import db from "../../../data/db.json";
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
  const [subText, setSubText] = useState<string>(`${db.news[0].title}`);
  const [subDesc, setSubDesc] = useState<string>(`${db.news[0].subdesc}`);
  const navigate = useNavigate();
  const [go, setGo] = useState(`/news/${db.news[0].id}`);
  const handleGo = () => {
    navigate(go);
  };

  const updateSubText = (index: number | null) => {
    switch (index) {
      case 0:
        setSubText(`${db.news[0].title}`);
        setGo(`/news/${db.news[0].id}`);
        setSubDesc(`${db.news[0].subdesc}`);
        break;
      case 1:
        setSubText(`${db.news[1].title}`);
        setGo(`/news/${db.news[1].id}`);
        setSubDesc(`${db.news[1].subdesc}`);
        break;
      case 2:
        setSubText(`${db.news[2].title}`);
        setGo(`/news/${db.news[2].id}`);
        setSubDesc(`${db.news[2].subdesc}`);
        break;
      case 3:
        setSubText(`${db.news[3].title}`);
        setGo(`/news/${db.news[3].id}`);
        setSubDesc(`${db.news[3].subdesc}`);
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
  const imageUrls = db.news.map((newsItem) => newsItem.img);
  return (
    <>
      <SliderDesc>
        <SliderDescSub>
          <p>{subDesc}</p>
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
      <SliderContainer className="slider-container">
        <StyleSlider ref={sliderRef} {...settings} imgs={imageUrls}>
          {db.news.map((newsItem, index) => (
            <Sliders key={index}>
              <SliderImg img={newsItem.img}>
                <Overlay />
              </SliderImg>
            </Sliders>
          ))}
        </StyleSlider>
      </SliderContainer>
    </>
  );
};

export default MainSlider;
