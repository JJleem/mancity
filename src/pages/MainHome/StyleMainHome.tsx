import styled, { keyframes } from "styled-components";

type Props = {
  isActive?: boolean;
  img?: string;
};
export const Opacity = keyframes`
0% {
  opacity:0;
}
100% {
  opacity:1;
}
`;
export const MainHomeContainer = styled.div`
  width: 100%;
  /* padding-top: 78px; */
  /* padding-bottom: 1000px; */
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  gap: 48px;
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 48px;
  }
`;
export const MainHomeInner = styled.div`
  width: 100%;

  /* padding: 0 18px; */

  display: flex;

  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 68vh;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: fit-content;
    padding-bottom: 150px;
  }
`;
