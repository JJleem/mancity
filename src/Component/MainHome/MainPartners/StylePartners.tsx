import styled, { css } from "styled-components";
import { scrollProps } from "../mainNews/StyleMainNewsSection";
import { Opacity } from "../../../pages/MainHome/StyleMainHome";
type imgprops = {
  img?: string;
};
export const MainPartnersSection = styled.div<scrollProps>`
  width: 1024px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.info_BG};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ scroll }) =>
    scroll >= 4000 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
  gap: 10px;
`;
export const PartnerImg = styled.div<imgprops>`
  background: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 33%;
  height: 200px;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 25%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 10%;
    background-size: cover;
    background-position: left;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 15%;
  }
`;
