import styled, { css } from "styled-components";
import { Opacity } from "../../../pages/StyleMainHome";
import { scrollProps } from "../mainNews/StyleMainNewsSection";

export const EdsSection = styled.div<scrollProps>`
  width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  ${({ scroll }) =>
    scroll >= 3500 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}
  opacity: 0;
  animation-delay: 0.1s;
`;
