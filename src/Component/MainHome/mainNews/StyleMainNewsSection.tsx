import styled from "styled-components";
import { Opacity } from "../../../pages/MainHome/StyleMainHome";
import { css } from "styled-components";
export type scrollProps = {
  scroll: number;
};
type imgsProps = {
  imgs: string;
};
export const NewsSection = styled.div<scrollProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ scroll }) =>
    scroll >= 1130 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
`;
export const NewsSectionInner = styled.div`
  width: 1024px;

  display: flex;
  justify-content: center;
  animation: ${Opacity} 1.5s ease-in-out;
  flex-direction: column;
  gap: 48px;
`;
export const TitleSection = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p76};
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  font-weight: 200;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
  span {
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p45};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p30};
  }
`;
export const TitleNewsBox = styled.div`
  display: flex;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;
export const TitleBox = styled.div`
  width: 34%;
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.TitleColor};
  font-weight: 700;
  gap: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_Skyblue};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const TitleBoxImg = styled.div<imgsProps>`
  width: 100%;
  height: 172px;
  background-image: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
`;
export const TitleBoxOverlay = styled.span`
  position: absolute;
  background: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    border-radius: 100%;
    background: rgba(0, 24, 56, 0.8);
    width: 90px;
    height: 90px;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.point_Skyblue};
    }

    svg {
      &:hover {
        fill: ${({ theme }) => theme.colors.medium_blue};
      }
    }
  }
`;
export const TitleBoxTitle = styled.span`
  padding: 0px 17px;
  font-size: ${({ theme }) => theme.fontSize.p17};
  text-overflow: ellipsis;
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p17};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 400px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p15};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
  }
`;
export const TitleBoxSub = styled.span`
  padding: 0px 17px;
  font-size: ${({ theme }) => theme.fontSize.p12};
  color: ${({ theme }) => theme.colors.sub_text};
`;

export const NewsSectionTitle = styled.div``;
export const NewsSectionBg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50vh;
`;
export const Gif = styled.div<scrollProps>`
  width: 1024px;
  height: 80px;
  ${({ scroll }) =>
    scroll >= 1050 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
  background-image: url("https://tpc.googlesyndication.com/simgad/11616952205793952351");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    background-size: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    background-size: 100% 60%;
  }
`;
export const GifTwo = styled.div<scrollProps>`
  margin-top: 48px;
  width: 1024px;
  height: 80px;
  ${({ scroll }) =>
    scroll >= 2700 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
  background-image: url("https://tpc.googlesyndication.com/simgad/7507177924704857320");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    background-size: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    background-size: 100% 60%;
  }
`;
export const SubNewsBox = styled.div`
  width: 100%;
  padding: 0 17px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;
  align-items: center;
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SubNewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SubBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  gap: 3px;

  flex-direction: column;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.TitleColor};
  font-weight: 700;
  transition: all 0.5s;
  padding: 10px;
  padding-top: 0px;
  &:hover {
    background: ${({ theme }) => theme.colors.point_Skyblue};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.p17};
    @media ${({ theme }) => theme.mediaSize.sm} {
      font-size: ${({ theme }) => theme.fontSize.p17};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 400px;
    }
    @media ${({ theme }) => theme.mediaSize.xs} {
      font-size: ${({ theme }) => theme.fontSize.p15};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 300px;
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.p12};
    color: ${({ theme }) => theme.colors.sub_text};
  }
  div {
    background-size: contain;
  }

  @media ${({ theme }) => theme.mediaSize.md} {
    align-items: center;
    padding-top: 10px;
    justify-content: center;
  }
`;
export const SubBoxBig = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  gap: 3px;

  flex-direction: column;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.TitleColor};
  font-weight: 700;
  p {
    font-size: ${({ theme }) => theme.fontSize.p20};
    @media ${({ theme }) => theme.mediaSize.sm} {
      font-size: ${({ theme }) => theme.fontSize.p17};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 400px;
    }
    @media ${({ theme }) => theme.mediaSize.xs} {
      font-size: ${({ theme }) => theme.fontSize.p15};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 300px;
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.p14};
    color: ${({ theme }) => theme.colors.sub_text};
  }

  @media ${({ theme }) => theme.mediaSize.md} {
    align-items: center;
    justify-content: center;
  }
`;
export const TitleBoxImgBig = styled.div<imgsProps>`
  width: 100%;
  height: 88.5%;
  background-image: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 500px;
  }
`;
export const MoreNews = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  position: relative;
  margin-top: 24px;
  width: 100%;
`;
export const MoreNewsBtn = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 12px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  z-index: 2;
  background: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p20};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.medium_blue};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: ${({ theme }) => theme.colors.point_Skyblue};
    color: ${({ theme }) => theme.colors.White};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 130px;
    padding: 10px 15px;
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
