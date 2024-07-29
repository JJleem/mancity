import styled from "styled-components";
import { Opacity } from "../../../../pages/MainHome/StyleMainHome";

export const NewsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100%;
  gap: 24px;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  opacity: 0;
  animation-delay: 0.1s;
  animation: ${Opacity} 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;
export const SeeMoreSection = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  position: relative;
`;
export const SeeMore = styled.button`
  position: absolute;
  left: 50%;
  background: ${({ theme }) => theme.colors.medium_blue};
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s;
  svg {
    width: 24px;
    height: 24px;
    g {
      fill: ${({ theme }) => theme.colors.point_Skyblue};
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors.point_Skyblue};
    svg {
      g {
        fill: ${({ theme }) => theme.colors.medium_blue};
      }
    }
  }
`;
