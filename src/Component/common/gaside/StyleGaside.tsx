import styled from "styled-components";
import arrow from "../../../assets/img/icon/arrow_down.png";

type IsToggleProps = {
  isToggle?: boolean;
};
type Props = {
  isShop?: boolean;
};
export const GasideContainer = styled.div<IsToggleProps>`
  display: none;
  transition: all 0.5s;
  @media ${({ theme }) => theme.mediaSize.md} {
    display: block;
    position: fixed;

    top: 78px;
    z-index: 9999999;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.middle_Skyblue};
    right: ${({ isToggle }) => (isToggle ? "0px" : "-100%")};
  }
`;
export const GasideInner = styled.div<Props>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  .active {
    background: ${({ theme }) => theme.colors.medium_blue};
    color: White;
  }
  & :nth-child(5) {
    span {
      transition: all 0.3s;
      ${({ isShop }) =>
        isShop ? " transform: rotate(0deg);" : " transform: rotate(180deg);"}
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    .active {
      &:hover {
        background: ${({ theme }) => theme.colors.medium_blue};
        color: White;
      }
    }
  }
`;
export const GasideSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p20};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.TitleColor};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.medium_blue};
    color: White;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 24px 24px;
    align-items: center;
    justify-content: space-between;

    span {
      background: url(${arrow});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 24px;
      height: 24px;
      transform: rotate(270deg);
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p19};
    a {
      padding: 14px 14px;
    }
    &:hover {
      background: transparent;
      color: black;
    }
  }
`;
export const ShopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ShopContent = styled.div`
  width: 100%;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sub_text};
  background: ${({ theme }) => theme.colors.info_BG};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.p15};
  transition: all 0.3s;
  a {
    width: 100%;
    padding: 18px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.medium_blue};
    color: ${({ theme }) => theme.colors.White};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    a {
      width: 100%;
      padding: 10px;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.info_BG};
      color: black;
    }
  }
`;
