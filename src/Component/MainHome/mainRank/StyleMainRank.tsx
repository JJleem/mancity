import styled, { css } from "styled-components";
import { Opacity } from "../../../pages/StyleMainHome";
import epl from "../../../assets/img/logo/epl.png";
type Props = {
  scroll: number;
};
export const RankSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
  position: relative;
`;
export const RankSectionInner = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation-delay: 0.1s;
  border: 1px solid #f00;
  ${({ scroll }) =>
    scroll >= 90 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}

  flex-direction: column;
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
`;
export const RankSectionContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #f00;
  gap: 24px;
`;
export const RankSectionContentBox = styled.div`
  display: flex;
`;
export const RankNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.TitleColor};
  padding: 15px;
  /* border: 2px solid ${({ theme }) => theme.colors.TitleColor}; */
  box-shadow: 0px 0px 3px #000;
  background: url("https://i2-prod.mirror.co.uk/incoming/article30092411.ece/ALTERNATES/s1200d/1_GettyImages-1493128351.jpg")
    rgba(0, 0, 0, 0.4);

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
`;
export const RankList = styled.div``;
export const Gif = styled.div`
  width: 970px;
  height: 80px;
  background-image: url("https://tpc.googlesyndication.com/simgad/11616952205793952351");
`;
