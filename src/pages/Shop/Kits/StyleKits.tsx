import styled from "styled-components";
import close from "../../../assets/img/icon/close.png";
export const KitsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 63px;

  @media ${({ theme }) => theme.mediaSize.sm} {
    padding-top: 55px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding-top: 0px;
  }
`;

export const KitsMainImg = styled.div`
  background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-navigation-catalog-MAN/default/dw071fc5ab/plp_2425/PLP%20Away_%20Banners/PLP%20Banner%20Desktop%20-%20Away_Players%20(1445x800).jpg?sw=1900&sfrm=png");
  width: 100%;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.mediaSize.md} {
    background-size: cover !important;
    background-position: top !important;
    background-repeat: no-repeat !important;
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-navigation-catalog-MAN/default/dw071fc5ab/plp_2425/PLP%20Away_%20Banners/PLP%20Banner%20Desktop%20-%20Away_Players%20(1445x800).jpg?sw=1200&sfrm=png");
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-navigation-catalog-MAN/default/dw071fc5ab/plp_2425/PLP%20Away_%20Banners/PLP%20Banner%20Desktop%20-%20Away_Players%20(1445x800).jpg?sw=768&sfrm=png");
    background-size: cover !important;
    background-position: top !important;
    background-repeat: no-repeat !important;
  }
`;
export const KitsMainImgSection = styled.div`
  width: 100%;
  height: 527px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 400px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    min-width: 375px;
    height: 400px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    height: 390px;
  }
`;
export const KitsMainSub = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.TitleColor};
  height: 51%;
  bottom: 0;
  @media ${({ theme }) => theme.mediaSize.lg} {
    height: 60%;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 70%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 71%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 71%;
  }
`;
export const KitsMainSubInner = styled.div`
  width: 1024px;
  padding: 10px 18px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  .left {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    p {
      font-size: ${({ theme }) => theme.fontSize.p76};
      font-weight: 700;
      color: White;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.p25};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.point_Skyblue};
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.point_Skyblue};
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    .left {
      p {
        font-size: ${({ theme }) => theme.fontSize.p45};
      }
      span {
        font-size: ${({ theme }) => theme.fontSize.p20};
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
    gap: 12px;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
`;

//kitsList
type isClick = {
  isClick?: boolean;
};
type isTab = {
  isClick?: boolean;
};
type imgProps = {
  imgs?: string;
};
export const KitsListContainer = styled.div`
  width: 1024px;
  padding: 10px 18px;
  padding-top: 48px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  @media ${({ theme }) => theme.mediaSize.lg} {
    padding: 10px 24px;
    padding-top: 48px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 10px 146px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 10px 290px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 10px 338px;
  }
`;
export const KitsListFillterSection = styled.div<isClick>`
  width: 100%;
  background-color: #034752;
  padding: 36px 24px;
  display: flex;
  justify-content: end;
  font-weight: 700;
  color: White;
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSize.p20};
`;
export const KitsListFillter = styled.div<isClick>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${({ isClick, theme }) => (isClick ? theme.colors.Yell_Btn : "#fff")};
  cursor: pointer;
`;
export const KitsListSort = styled.div<isClick>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ isClick, theme }) => (isClick ? theme.colors.Yell_Btn : "#fff")};
`;
export const ArrowSvg = styled.svg<isClick>`
  width: 24px;
  height: 24px;
  transition: all 0s;
  path {
    stroke: ${({ isClick, theme }) =>
      isClick ? theme.colors.Yell_Btn : "#fff"};
    stroke-width: 2;
  }
  transform: ${({ isClick }) => (isClick ? "rotate(180deg)" : "")};
`;
export const KitsListFillterInfo = styled.div<isClick>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.info_BG};
  padding: 36px 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  font-weight: 700;
  color: #034752;
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSize.p20};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p17};
  }

  .custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .custom-checkbox input {
    display: none; /* 기본 체크박스 숨기기 */
  }

  .checkmark {
    width: 24px; /* 체크박스 크기 */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    border: 2px solid #ccc; /* 기본 테두리 색상 */
    border-radius: 4px; /* 모서리 둥글게 */
    margin-right: 10px;
    position: relative; /* 체크 표시 위치 설정 */
  }

  .custom-checkbox input:checked + .checkmark {
    background-color: ${({ theme }) => theme.colors.TitleColor};
    border-color: ${({ theme }) => theme.colors.TitleColor};
  }

  .checkmark::after {
    content: "";
    display: none; /* 기본적으로 체크 표시 숨기기 */
    position: absolute;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white; /* 체크 표시 색상 */

    border-width: 0 2px 2px 0; /* 체크 표시 모양 */
    transform: rotate(45deg); /* 체크 표시 회전 */
  }

  .custom-checkbox input:checked + .checkmark::after {
    display: block; /* 체크된 경우 체크 표시 보이기 */
  }
`;
export const KitsTabs = styled.div<isTab>`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
  &::before {
    content: "";
    position: absolute;
    transition: all 0.3s;
    width: ${({ isClick }) => (isClick ? "100%" : "0%")};
    border-bottom: 2px solid #034752;
    bottom: ${({ isClick }) => (isClick ? "0px" : "-2px")};
  }
`;
export const KitsTabsUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  li {
    width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.TitleColor};
    padding: 0px 2px;
    border-radius: 3px;
    font-size: ${({ theme }) => theme.fontSize.p17};
    span {
      width: 24px;
      height: 24px;
      background: url(${close});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    li {
      font-size: ${({ theme }) => theme.fontSize.p12};
      span {
        width: 18px;
        height: 18px;
        background: url(${close});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
`;
export const KitsListFillterul = styled.div<isClick>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.info_BG};
  padding: 36px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  color: #034752;

  font-size: ${({ theme }) => theme.fontSize.p20};
  .ulList {
    width: 100%;
  }
`;
export const KitsGridContainer = styled.div`
  width: 1024px;
  padding: 10px 18px;
  padding-top: 48px;
  padding-bottom: 48px;
  gap: 12px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media ${({ theme }) => theme.mediaSize.lg} {
    padding: 0px 24px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 0px 146px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 0px 290px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 0px 338px;
  }
  flex-direction: column;
`;
export const KitsGridItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.info_BG};
  cursor: pointer;
  &:hover {
    .sub {
      background: ${({ theme }) => theme.colors.TitleColor};
      color: ${({ theme }) => theme.colors.Yell_Btn};
    }
  }
`;
export const KitsGridItemImg = styled.div<imgProps>`
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 315px;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 315px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 215px;
  }
`;
export const KitsGridItemInner = styled.div`
  background: ${({ theme }) => theme.colors.info_BG};
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const KitsGrideItemSub = styled.div`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSize.p17};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s;
  justify-content: center;

  p {
    min-height: 50px;
  }
  span {
    height: 50%;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p14};
    p {
      min-height: 60px;
    }
  }
`;
export const SeeMoreBox = styled.div`
  width: 1024px;
`;
export const SeeMoreKits = styled.button`
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
      fill: ${({ theme }) => theme.colors.Yell_Btn};
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors.Yell_Btn};
    color: ${({ theme }) => theme.colors.TitleColor};
    svg {
      g {
        fill: ${({ theme }) => theme.colors.TitleColor};
      }
    }
  }
`;
