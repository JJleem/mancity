import React, { useEffect, useState } from "react";
import {
  Gif,
  MoreNews,
  MoreNewsBtn,
  NewsSection,
  NewsSectionBg,
  NewsSectionInner,
  SubBox,
  SubBoxBig,
  SubNewsBox,
  SubNewsGrid,
  TitleBox,
  TitleBoxImg,
  TitleBoxImgBig,
  TitleBoxOverlay,
  TitleBoxSub,
  TitleBoxTitle,
  TitleNewsBox,
  TitleSection,
} from "./StyleMainNewsSection";
import { useNavigate } from "react-router-dom";

const MainNewsSection = () => {
  const navigate = useNavigate();
  const onNews = () => {
    navigate("/news");
  };
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
    <NewsSection scroll={scrollY}>
      <NewsSectionInner>
        <TitleSection>
          <span>CLUB</span>NEWS
        </TitleSection>
        <TitleNewsBox>
          <TitleBox>
            <TitleBoxImg>
              <TitleBoxOverlay>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#FFFFFF"
                  >
                    <path d="m380-300 280-180-280-180v360ZM200-120q-33   " />
                  </svg>
                </span>
              </TitleBoxOverlay>
            </TitleBoxImg>
            <TitleBoxTitle> City 3-4 Celtic: Extended highlights</TitleBoxTitle>
            <TitleBoxSub>MATCH HIGHLIGHTS</TitleBoxSub>
          </TitleBox>
          <TitleBox>
            <TitleBoxImg>
              <TitleBoxOverlay>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#FFFFFF"
                    width="50px"
                    height="50px"
                  >
                    <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
                  </svg>
                </span>
              </TitleBoxOverlay>
            </TitleBoxImg>
            <TitleBoxTitle> 12 ACADEMY PLAYERS SIGN SCHOLARSHIPS</TitleBoxTitle>
            <TitleBoxSub>EDS & ACADEMY</TitleBoxSub>
          </TitleBox>
          <TitleBox>
            <TitleBoxImg>
              <TitleBoxOverlay>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#FFFFFF"
                  >
                    <path d="m380-300 280-180-280-180v360ZM200-120q-33   " />
                  </svg>
                </span>
              </TitleBoxOverlay>
            </TitleBoxImg>
            <TitleBoxTitle>
              Guardiola: Bobb has incredible potential
            </TitleBoxTitle>
            <TitleBoxSub>INTERVIEWS</TitleBoxSub>
          </TitleBox>
        </TitleNewsBox>
        <SubNewsBox>
          <SubBoxBig>
            <TitleBoxImgBig></TitleBoxImgBig>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ducimus
            </p>
            <span>accusamus et excepturi!</span>
          </SubBoxBig>
          <SubNewsGrid>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>Lorem ipsum dolor sit amet c</p>
              <span>accusamus et excepturi!</span>
            </SubBox>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ducimus
              </p>
              <span>accusamus et excepturi!</span>
            </SubBox>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ducimus
              </p>
              <span>accusamus et excepturi!</span>
            </SubBox>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ducimus
              </p>
              <span>accusamus et excepturi!</span>
            </SubBox>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ducimus
              </p>
              <span>accusamus et excepturi!</span>
            </SubBox>
            <SubBox>
              <TitleBoxImg></TitleBoxImg>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ducimus
              </p>
              <span>accusamus et excepturi!</span>
            </SubBox>
          </SubNewsGrid>
        </SubNewsBox>
        <MoreNews>
          <MoreNewsBtn onClick={onNews}>More News</MoreNewsBtn>
        </MoreNews>
      </NewsSectionInner>
    </NewsSection>
  );
};

export default MainNewsSection;
