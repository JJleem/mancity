import React, { useEffect, useState, Component } from "react";
import {
  Bg,
  FlexContainer,
  PlayerBox,
  PlayerBoxImg,
  PlayerBoxLink,
  PlayerBoxText,
  PlayerInner,
  PlayerSlideContainer,
  ShopMainPickInner,
  ShopMainPickTop,
  SliderContainer,
  SliderSection,
} from "../../pages/Shop/StyleShop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import playerslideDb from "../../data/shopDb.json";
import { useMediaQuery } from "react-responsive";
const PlayerSlide = () => {
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

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  let slidesToShow;
  if (isDesktop) {
    slidesToShow = 4;
  } else if (isTablet) {
    slidesToShow = 3;
  } else if (isMobile) {
    slidesToShow = 3;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <PlayerSlideContainer scroll={scrollY}>
      <PlayerInner>
        <ShopMainPickTop>SHOP BY PLAYER</ShopMainPickTop>
        <FlexContainer>
          <SliderContainer className="slider-container">
            <SliderSection {...settings}>
              {playerslideDb.playerslide.map((player, index) => (
                <Bg key={player.id}>
                  <PlayerBox>
                    <PlayerBoxLink to={`/shop/player/${player.link}`}>
                      <PlayerBoxImg imgs={player.imgs}></PlayerBoxImg>
                      <PlayerBoxText>{player.name}</PlayerBoxText>
                    </PlayerBoxLink>
                  </PlayerBox>
                </Bg>
              ))}
            </SliderSection>
          </SliderContainer>
        </FlexContainer>
      </PlayerInner>
    </PlayerSlideContainer>
  );
};

export default PlayerSlide;
