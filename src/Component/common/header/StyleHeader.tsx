import styled from "styled-components";
import mainlogo from "../../../assets/img/logo/mainlogo.png";
import language from "../../../assets/img/icon/language.png";
import account from "../../../assets/img/icon/account_circle.png";
import sponser from "../../../assets/img/icon/wix_homepage_v2.png.png";
type logoProps = {
  logo?: string;
};
export const HeaderContainer = styled.div`
  width: 100vw;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(152, 197, 233, 0.8);
  position: fixed;
  top: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.TitleColor};
  z-index: 9999;
`;
export const HeaderInner = styled.div`
  width: 1024px;

  height: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const MenuSection = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  li {
    padding: 8px 8px;
    transition: all 0.5s;
    &:hover {
      background: ${({ theme }) => theme.colors.middle_Skyblue};
      color: White;
      border-radius: 4px;
    }
  }

  @media ${({ theme }) => theme.mediaSize.md} {
    li {
      display: none;
    }
  }
`;
export const HeaderLogo = styled.div`
  background-image: url(${mainlogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
`;
export const IconSection = styled.div<logoProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.5s;
  font-size: ${({ theme }) => theme.fontSize.p12};
  & div:nth-child(2) {
    border-left: 1px solid ${({ theme }) => theme.colors.middle_Skyblue};
    border-right: 1px solid ${({ theme }) => theme.colors.middle_Skyblue};
    padding: 2px 13px;
  }
  & div:nth-child(3) {
    padding: 0;
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.TitleColor};
    }
    div {
      width: 60px;
      height: 30px;
    }
  }
  & div:nth-child(4) {
    display: none;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    & div:nth-child(3) {
      display: none;
    }

    & div:nth-child(2) {
      width: 100px;
      div {
        width: 50px;
      }
    }
    & div:nth-child(4) {
      display: block;
    }
  }
`;
export const Icon = styled.div<logoProps>`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 5px;
  transition: all 0.5s;
  &:hover {
    background: ${({ theme }) => theme.colors.middle_Skyblue};
    color: White;
    border-radius: 4px;
  }
`;
export const IconLogo = styled.div<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
`;
