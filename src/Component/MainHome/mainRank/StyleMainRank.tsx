import styled, { css } from "styled-components";
import { Opacity } from "../../../pages/StyleMainHome";
import epl from "../../../assets/img/logo/epl.png";
import rank from "../../../assets/img/bg/rank.png";
import ranksm from "../../../assets/img/bg/ranksm.png";
import liverpool from "../../../assets/img/logo/Liverpool_FC.png";
import arsnal from "../../../assets/img/logo/Arsenal_FC.png";
import aston from "../../../assets/img/logo/Aston_Villa_FC_new_crest.svg.png";
import city from "../../../assets/img/logo/mainlogo.png";

type Props = {
  scroll: number;
};
type Logo = {
  logo: string;
};
export const RankSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
  position: relative;
`;
export const RankSectionInner = styled.div<Props>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation-delay: 0.1s;

  gap: 48px;
  ${({ scroll }) =>
    scroll >= 90 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}

  flex-direction: column;
  @media ${({ theme }) => theme.mediaSize.sm} {
    ${({ scroll }) =>
      scroll >= 0 &&
      css`
        animation: ${Opacity} 1.5s ease-in-out;
        animation-fill-mode: forwards;
      `}
  }
`;
export const RankSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  i {
    width: 164px;
    height: 100px;
    background-image: url(${epl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  span {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.p76};
    color: ${({ theme }) => theme.colors.TitleColor};
    font-weight: 300;
    p {
      font-weight: 900;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    span {
      font-size: ${({ theme }) => theme.fontSize.p45};
    }
  }
`;
export const RankSectionContent = styled.div`
  display: flex;
  width: 1024px;
  justify-content: space-between;
  align-items: center;

  gap: 12px;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    gap: 24px;
  }
`;
export const RankSectionContentBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  min-width: 680px;
  max-width: 680px;
  height: 100%;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;

    height: 100%;
    min-width: 452px;
    max-width: 452px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    min-width: 342px;
    max-width: 342px;
  }
`;
export const RankNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.TitleColor};
  padding: 15px;

  background: url(${rank});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  span {
    width: 164px;
    height: 80px;
    background-image: url(${epl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.p76};
    font-weight: 900;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: ${({ theme }) => theme.fontSize.p20};
      color: ${({ theme }) => theme.colors.middle_Skyblue};
      padding-right: 6px;
      padding-left: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  div {
    width: 80%;
    padding: 8px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.point_Skyblue};
    background: ${({ theme }) => theme.colors.medium_blue};
    transition: all 0.5s;
    &:hover {
      color: ${({ theme }) => theme.colors.medium_blue};
      background: ${({ theme }) => theme.colors.point_Skyblue};
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 50%;
    background: url(${ranksm});
  }
`;
export const RankList = styled.div`
  height: 340px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.TitleColor};
  #first {
    span {
      font-size: ${({ theme }) => theme.fontSize.p11};
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    #first {
      span {
        font-size: ${({ theme }) => theme.fontSize.p9};
      }
    }
  }
`;
export const Gif = styled.div`
  width: 970px;
  height: 80px;
  background-image: url("https://tpc.googlesyndication.com/simgad/11616952205793952351");
`;

export const ListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  &:hover {
    background: ${({ theme }) => theme.colors.middle_Skyblue};
  }
  &:nth-child(1) {
    &:hover {
      background: transparent;
    }
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
  &:nth-child(2) {
    background: ${({ theme }) => theme.colors.middle_Skyblue};
    i {
      background-image: url(${city});
    }
  }
  &:nth-child(3) {
    i {
      background-image: url(${arsnal});
    }
  }
  &:nth-child(4) {
    i {
      background-image: url(${liverpool});
    }
  }
  &:nth-child(5) {
    border-bottom: none;
    i {
      background-image: url(${aston});
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
`;

export const ListRank = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-size: ${({ theme }) => theme.fontSize.p20};
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const ListClub = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;

  position: relative;
  padding-left: 30px;

  i {
    width: 24px;
    height: 24px;

    position: absolute;
    top: 0;
    left: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 140px;

    padding-left: 20px;
    i {
      position: absolute;
      top: 0;
      left: 0px;
    }
  }
`;
export const ListMatch = styled.span`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 20px;
  }
`;
export const ListPoint = styled.span`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 30px;
  }
`;
export const ListWin = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListDraw = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListLose = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LatestMatchSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.md} {
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    min-width: 452px;
    max-width: 452px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    min-width: 342px;
    max-width: 342px;
  }
`;
export const LatestMatchTopInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.TitleColor};
  font-size: ${({ theme }) => theme.fontSize.p18};
  background: ${({ theme }) => theme.colors.middle_Skyblue};
  padding: 20px 0px;
  gap: 6px;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 900;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p24};
    max-width: 680px;
  }
`;
export const LatestMatchBottomInner = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaSize.md} {
    max-width: 680px;
  }
`;
export const LatestMatchBottomInnerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  font-weight: 700;

  @media ${({ theme }) => theme.mediaSize.md} {
    padding-top: 10px;
  }
`;
export const LatestMatchBottomInnerLogo = styled.span<Logo>`
  width: 70px;
  height: 70px;
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const LatestMatchBottomInnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
  :nth-child(2) {
    color: ${({ theme }) => theme.colors.Header_BG};
  }
  :nth-child(3) {
    font-size: ${({ theme }) => theme.fontSize.p45};
  }
  :nth-child(4) {
    font-size: ${({ theme }) => theme.fontSize.p12};
    white-space: nowrap;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 0px;
`;
export const Button = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.point_Skyblue};
  background: ${({ theme }) => theme.colors.medium_blue};

  padding: 12px 36px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.medium_blue};
    background: ${({ theme }) => theme.colors.point_Skyblue};
  }
`;
