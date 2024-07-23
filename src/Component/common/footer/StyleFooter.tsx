import React from "react";
import styled from "styled-components";
import bgimg from "../../../assets/img/bg/Image.png";

type logoProps = {
  logo?: string;
};
export const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
export const FooterTopSection = styled.div`
  width: 100%;
  padding: 24px 0px;
  background-image: url(${bgimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterTopInner = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;
export const FooterTopLogo = styled.div<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 160px;
  height: 80px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 108px;
    height: 54px;
  }
`;
export const FooterMiddleSection = styled.div`
  background: ${({ theme }) => theme.colors.middle_Skyblue};
  padding: 24px 10%;
  width: 100%;
  @media ${({ theme }) => theme.mediaSize.sm} {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 18px;
  }
`;
export const FooterMiddleInner = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.sm} {
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.TitleColor};
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.colors.TitleColor};
      color: White;
    }
  }
`;
export const FooterMiddleSponser = styled.li<logoProps>`
  width: 120px;
  height: 72px;
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${({ theme }) => theme.mediaSize.sm} {
    display: none;
  }
`;
export const FooterMiddleBtn = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;
    font-weight: 700;
  }
`;
export const FooterBottomSection = styled.div`
  background: ${({ theme }) => theme.colors.TitleColor};
  padding: 0 40px;
`;
export const FooterBottomInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const FooterBottomTop = styled.div`
  width: 100%;
  padding: 48px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    gap: 48px;
  }
`;
export const LogoBTSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const LogoBTInner = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.White};
  gap: 9px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.medium_blue};
  padding: 15px 13px;
`;
export const SVGBTInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.medium_blue};
  width: 48px;
  height: 48px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.point_Skyblue};
    path {
      fill: ${({ theme }) => theme.colors.TitleColor};
    }
    #play {
      fill: ${({ theme }) => theme.colors.point_Skyblue};
    }
  }
`;
export const SVGSection = styled.div`
  display: flex;
  border-left: 1px solid ${({ theme }) => theme.colors.sub_text};
  padding: 0 20px;
  gap: 20px;
`;
export const SVGBT = styled.svg<logoProps>`
  width: 24px;
  height: 24px;
  path {
    fill: ${({ theme }) => theme.colors.point_Skyblue};
  }
  #play {
    fill: ${({ theme }) => theme.colors.TitleColor};
  }
  &:hover {
  }
`;
export const LogoBT = styled.span<logoProps>`
  width: 24px;
  height: 24px;
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const FooterBottomTopLogo = styled.div<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 112px;
  height: 112px;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 80px;
    height: 80px;
  }
`;
export const FooterBottomTopInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaSize.md} {
    border-top: 1px solid ${({ theme }) => theme.colors.sub_text};
    padding-top: 48px;
  }
`;
export const FooterBottomBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.sub_text};
`;
export const FooterBottomBottomLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  padding: 0px 100px;
`;
export const FooterBottomItems = styled.div<logoProps>`
  width: 50px;
  height: 30px;
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
`;
