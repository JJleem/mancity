import Slider from "react-slick";
import styled from "styled-components";
type Props = {
  isActive?: boolean;
  img?: string;
};
export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Sliders = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-top: 78px;

  @media ${({ theme }) => theme.mediaSize.md} {
    height: 700px;
    padding-top: 78px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 400px;
    padding-top: 78px;
  }
`;
export const SliderImg = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 80% 100%;
  position: relative;

  @media ${({ theme }) => theme.mediaSize.xl} {
    background-size: cover;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.8s;
  &:active {
    background: transparent;
  }
  &:hover {
    background: transparent;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const StyleSlider = styled(Slider)<Props>`
  width: 100%;
  height: 100%;
  position: relative;

  .slick-dots {
    position: absolute;
    display: flex;

    width: fit-content;
    height: fit-content;
    bottom: 10px;
    right: 56px;
    padding: 0 !important;

    gap: 0;
    padding-right: 30px;
    li:nth-child(1) {
      button {
        background-image: url("https://www.mancity.com/meta/media/01ibqb4w/pg-wide-overlay.jpg?width=1620");
      }
    }
    li:nth-child(2) {
      button {
        background-image: url("https://www.mancity.com/meta/media/tloazxvl/celtic-lead.jpg?width=645&height=364&mode=crop");
      }
    }
    li:nth-child(3) {
      button {
        background-image: url("https://media.cnn.com/api/v1/images/stellar/prod/230517173313-06-champions-league-man-city-real-madrid-semifinals-spt-intl.jpg?c=original");
      }
    }
    li:nth-child(4) {
      button {
        background-image: url("https://www.mancity.com/meta/media/sinice2v/inside-city-wide.jpg?width=645&height=364&mode=crop");
      }
    }
  }

  .slick-dots li {
    width: 200px;
    height: 100px;
  }

  .slick-dots li button {
    width: 100%;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 4px #000;
    opacity: 0.7;
  }

  .slick-dots li.slick-active button {
    opacity: 1;
  }
  .slick-dots li button:before {
    content: "";
  }

  @media ${({ theme }) => theme.mediaSize.xl} {
    .slick-dots li {
      width: 200px;
      height: 100px;

      padding-bottom: 10px;
    }
    .slick-dots {
      width: 300px;
      bottom: 0%;

      right: -30px;
    }
    .slick-dots li button {
      width: 100%;
      height: 100%;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 0px 0px 4px #000;
      opacity: 0.7;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    .slick-dots li {
      width: 23%;
      height: 120px;
    }
    .slick-dots {
      width: 100%;
      bottom: 6%;
      right: 0%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 100%;

    .slick-dots li {
      width: 22%;
      height: 80px;
    }
    .slick-dots {
      width: 100%;

      gap: 0;

      bottom: 0px;
      right: 0%;
      padding: 0;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 390px;
    .slick-dots li {
      height: 5px;
      width: 10px;

      transition: all 0.3s;
      border-radius: 100%;
    }
    .slick-dots {
      bottom: 0;
      transition: all 0.3s;
    }
    .slick-dots li.slick-active button {
      background: ${({ theme }) => theme.colors.TitleColor};
      width: 20px;
      transition: all 0.1s;
      border-radius: 3px;
      opacity: 1;
    }
    .slick-dots li.slick-active {
      width: 20px;
      transition: all 0.3s;
      border-radius: 3px;
    }
    .slick-dots li button {
      background: ${({ theme }) => theme.colors.TitleColor};
      border-radius: 100%;
      width: 100%;
      height: 100%;
      background-image: none !important;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: none;
      opacity: 0.6;
    }
  }
`;
export const SliderDesc = styled.div`
  width: 400px;
  height: 295px;
  background: rgba(0, 24, 56, 1);

  position: absolute;
  top: 623px;
  z-index: 99;
  left: 56px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p30};
  display: flex;

  flex-direction: column;
  padding: 20px;
  @media ${({ theme }) => theme.mediaSize.lg} {
    left: 18px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    left: 0px;
    top: 566px;
    bottom: 0px;
    height: 136px;
    font-size: ${({ theme }) => theme.fontSize.p20};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    left: 0px;
    top: 400px;
    bottom: 0px;
    height: 136px;
    background: rgba(0, 24, 56, 1);
    font-size: ${({ theme }) => theme.fontSize.p20};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p19};
    letter-spacing: -1px;
  }
`;
export const SliderDescSub = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.p17};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.point_Skyblue};
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const SliderDescTitle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${({ theme }) => theme.mediaSize.xs} {
    svg {
      top: -24px;
      right: -4px;
    }
  }
  p {
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.point_Skyblue};
    }
  }
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;

    g {
      transition: fill 0.3s;
    }
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.point_Skyblue};
      }
    }
  }
`;
