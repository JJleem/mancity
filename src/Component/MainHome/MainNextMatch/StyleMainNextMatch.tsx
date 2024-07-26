import styled, { css } from "styled-components";
import { Opacity } from "../../../pages/MainHome/StyleMainHome";
type scrollProps = {
  scroll: number;
};
type logoProps = {
  logo?: string;
};
export const MainNextMatchContainer = styled.div<scrollProps>`
  opacity: 0;
  animation-delay: 0.1s;
  ${({ scroll }) =>
    scroll >= 700 &&
    css`
      animation: ${Opacity} 1.5s ease-in-out;
      animation-fill-mode: forwards;
    `}

  width:100%;

  display: flex;
  justify-content: center;

  align-items: center;
  padding: 48px;
  background: ${({ theme }) => theme.colors.medium_blue};
  color: ${({ theme }) => theme.colors.point_Skyblue};
`;
export const MainNextMatchInner = styled.div`
  width: 1024px;
  display: flex;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
  }
`;
export const MainNextMatchText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-right: 24px;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.info_BG};
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
    padding-bottom: 24px;

    padding-right: 0px;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize.p45};
  font-weight: 200;
  span {
    font-weight: 900;
  }
  height: fit-content;
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: 60px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p45};
  }
`;
export const Sub = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p12};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p17};
  }
`;
export const Btn = styled.div`
  background: ${({ theme }) => theme.colors.point_Skyblue};
  color: ${({ theme }) => theme.colors.medium_blue};
  border: 1px solid ${({ theme }) => theme.colors.point_Skyblue};
  font-weight: 700;
  padding: 10px 15px;
  width: fit-content;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.point_Skyblue};
    background: ${({ theme }) => theme.colors.medium_blue};
    color: ${({ theme }) => theme.colors.point_Skyblue};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p17};
    padding: 10px 20px;
  }
`;
export const MainNextMatchInfo = styled.div`
  width: 60%;
  padding-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    padding-top: 24px;
    padding-left: 0px;
    gap: 12px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 0px;
  }
`;
export const MainNextMatchLogo = styled.span<logoProps>`
  width: 150px;
  height: 150px;

  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100px;
    height: 100px;
  }
`;
export const MainNextMatchInfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.colors.White};
  :nth-child(1) {
  }
  :nth-child(3) {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.point_Skyblue};
    font-weight: 700;
  }
  :nth-child(5) {
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    white-space: nowrap;
  }
`;
