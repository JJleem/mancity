import styled, { css } from "styled-components";
import { Opacity } from "../../../pages/StyleMainHome";
import { scrollProps } from "../mainNews/StyleMainNewsSection";

export const WomenWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  height: 100%;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const WomenSection = styled.div<scrollProps>`
  width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  ${({ scroll }) =>
    scroll >= 2850 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
`;
