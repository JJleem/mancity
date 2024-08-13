import styled, { css } from "styled-components";
import { Opacity } from "../MainHome/StyleMainHome";
import Slider from "react-slick";
import { Link } from "react-router-dom";
type isShop = {
  isShop?: boolean;
};
type Imgs = {
  imgs?: string;
};
type scrollProps = {
  scroll: number;
};
export const ShopNavContainer = styled.div<isShop>`
  width: 100%;
  position: fixed;
  top: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.middle_Skyblue};
  display: ${({ isShop }) => (isShop ? null : "none")};
  overflow-x: hidden;
  z-index: 99999;
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const ShopNavInner = styled.div`
  width: 1024px;
  padding: 10px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ShopNavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  & .active {
    background: rgba(152, 197, 233, 0.8);
    color: black;
    border-radius: 4px;
  }
  li {
    padding: 10px 10px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 12px;
    font-size: ${({ theme }) => theme.fontSize.p15};
    li {
      padding: 10px 10px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    gap: 12px;
    font-size: ${({ theme }) => theme.fontSize.p10};
    li {
      padding: 10px 10px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const ShopMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 63px;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding-top: 55px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding-top: 0px;
  }
`;
export const ShopMainTop = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.Yell_Btn};
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 3px 0px;
`;
export const ShopMainImgSection = styled.div`
  width: 100%;
  height: 527px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaSize.md} {
    height: 1000px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    height: 390px;
  }
`;
export const ShopMainImg = styled.div`
  background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwa39cc85b/images/2024_campaigns/homepage_awaykit2425/hero_desktop_awaykit2425launch_v2-kdb_2560x720.jpg?sw=1900&sfrm=jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.mediaSize.lg} {
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw2896c289/images/2024_campaigns/homepage_awaykit2425/hero_mobile_awaykit2425launch_v2-kdb-notext.jpg?sw=992&sfrm=jpg");
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw2896c289/images/2024_campaigns/homepage_awaykit2425/hero_mobile_awaykit2425launch_v2-kdb-notext.jpg?sw=768&sfrm=jpg");
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
`;
export const ShopMainSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  p {
    font-size: ${({ theme }) => theme.fontSize.p32};
    font-weight: 700;
    letter-spacing: -1.5px;
  }
  span {
    font-weight: 500;
  }
  div {
    background-color: ${({ theme }) => theme.colors.Yell_Btn};
    padding: 18px 24px;
    font-weight: 700;
    margin-top: 12px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.Hover_Yell};
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    p {
      font-size: ${({ theme }) => theme.fontSize.p24};
      font-weight: 700;
      letter-spacing: -1.5px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.p14};
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    p {
      font-size: ${({ theme }) => theme.fontSize.p20};
      font-weight: 700;
      letter-spacing: -1.5px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.p11};
    }
  }
`;
export const ShopMainPickContainer = styled.div<scrollProps>`
  width: 100%;

  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation-delay: 0.1s;
  ${({ scroll }) =>
    scroll >= 90 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;

export const ShopMainPickInner = styled.div`
  width: 1024px;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ShopMainPickTop = styled.div`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.p25};
`;
export const ShopMainPickContent = styled.div`
  display: grid;
  width: 100%;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 12px;
  }
`;
export const ShopMainPickBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  box-shadow: 0px 0px 4px #ccc;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaSize.xs} {
  }
`;
export const ShopMainPickBoxImg = styled.div<Imgs>`
  background: url(${({ imgs }) => imgs});
  background-color: ${({ theme }) => theme.colors.info_BG};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 239px;
  height: 280px;

  transition: all 0.3s;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    height: 380px;
    background-size: 100% 90%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 280px;
    background-size: 100% 80%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    background-size: 100% 90%;
    height: 180px;
  }
`;
export const ShopMainPickBoxInfo = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;

  padding: 0px 6px;
  padding-bottom: 6px;
`;
export const ShopMainPickBoxTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p13};

  height: 60px;
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p12};
    height: 45px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p12};
    height: 80px;
  }
`;
export const ShopMainPickBoxPrice = styled.span`
  font-weight: 900;
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p14};
    font-weight: 900;
  }
`;
export const Bg = styled.div`
  color: White;
  width: 100%;
  height: 100%;
  padding: 0px 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.Yell_Btn};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 0px 6px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    &:hover {
      color: ${({ theme }) => theme.colors.White};
    }
  }
`;
export const PlayerBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px #000;
`;
export const PlayerBoxLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PlayerBoxImg = styled.div<Imgs>`
  background: url(${({ imgs }) => imgs});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 300px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 200px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 250px;
  }
`;
export const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const SliderSection = styled(Slider)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  .slick-prev,
  .slick-next {
    z-index: 1000;
  }
  .slick-prev {
    left: -12px;
    width: 48px;
    height: 48px;
    &::before {
      position: absolute;
      height: 100%;
      font-size: 48px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.medium_blue};
    }
  }
  .slick-next {
    right: -12px;
    width: 48px;
    height: 48px;
    &::before {
      position: absolute;
      height: 100%;
      font-size: 48px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.medium_blue};
    }
  }
`;
export const PlayerSlideContainer = styled.div<scrollProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 0;
  animation-delay: 0.1s;

  ${({ scroll }) =>
    scroll >= 510 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;
export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
`;
export const PlayerBoxText = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.medium_blue};
  border: 2px solid ${({ theme }) => theme.colors.medium_blue};
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p13};
    padding: 10px 0px;
  }
`;
export const PlayerInner = styled.div`
  width: 1024px;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.lg} {
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
  }
`;
export const BottomContainer = styled.div<scrollProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 0;
  animation-delay: 0.1s;

  ${({ scroll }) =>
    scroll >= 1000 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;
export const BottomInner = styled.div`
  width: 1024px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 18px;
`;
export const SectionOne = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
  }
`;
export const SectionOneOne = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 0px 3px #000;
  border: 1px solid #000;
  &:hover {
    div {
      color: ${({ theme }) => theme.colors.Yell_Btn};
    }
  }

  @media ${({ theme }) => theme.mediaSize.xs} {
    &:hover {
      div {
        color: ${({ theme }) => theme.colors.White};
      }
    }
  }
`;
export const SectionOneImg = styled.div<Imgs>`
  width: 100%;
  height: 320px;
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 300px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 220px;
  }
`;
export const SectionOneSub = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.medium_blue};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.p17};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 0px;
  font-weight: 700;
`;
export const SectionTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 12px;
  }
`;
export const SectionOneImgtwo = styled.div<Imgs>`
  width: 100%;
  height: 320px;
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 700px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 340px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 250px;
  }
`;
export const SummerSaleContainer = styled.div<scrollProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 0;
  animation-delay: 0.1s;
  flex-direction: column;
  gap: 48px;
  ${({ scroll }) =>
    scroll >= 2350 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;
export const SummerSaleImg = styled.div`
  width: 100%;
  height: 520px;
  background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwff32438c/images/2024_campaigns/homepage_thirdkit2425/hero_thirdkitlaunch_2425_sale_desktop.jpg?sw=1900&sfrm=jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media ${({ theme }) => theme.mediaSize.xl} {
    height: 420px;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    height: 300px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcac82bdd/images/2024_campaigns/homepage_thirdkit2425/hero_thirdkitlaunch_2425_sale_mobile.jpg?sw=1900&sfrm=jpg");
    height: 900px;
    background-size: cover;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    /* margin-top: -20px;
    margin-bottom: -20px; */
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    margin-top: -10px;
    margin-bottom: -200px;
    background-size: contain;
  }
`;
