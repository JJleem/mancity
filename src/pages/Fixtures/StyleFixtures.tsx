import styled from "styled-components";
import { Opacity } from "../MainHome/StyleMainHome";
type Props = {
  isClick?: boolean;
};
type Logo = {
  logo?: string;
};
export const FixturesContainer = styled.div`
  width: 100%;

  height: 100%;

  padding-top: 78px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;
export const FixturesList = styled.div`
  width: 1024px;
  border: 1px solid #f00;
  padding: 0px 18px;
  margin-bottom: -36px;
  display: flex;

  align-items: center;
  background: ${({ theme }) => theme.colors.middle_Skyblue};
`;
export const FixtureInfoSection = styled.div`
  width: 1024px;

  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.p45};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.TitleColor};
  padding: 8px 18px;
  gap: 48px;
  padding-bottom: 0;
`;
export const FixtureInfoTabs = styled.div`
  display: flex;
  gap: 24px;
`;
export const FixureTabs = styled.div<Props>`
  border-right: 1px solid ${({ theme }) => theme.colors.info_BG};
  font-size: ${({ theme }) => theme.fontSize.p17};
  padding-right: 24px;
  color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
  opacity: ${({ isClick }) => (isClick ? "1" : "0.6")};
  padding-bottom: 12px;
  position: relative;
  overflow: hidden;
  transition: opacity 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: calc(100% - 24px);
    bottom: ${({ isClick }) => (isClick ? "0px" : "-4px")};
    border: 2px solid ${({ theme }) => theme.colors.White};
    transition: all 0.2s;
  }
  &:hover {
    opacity: 1;
    &::before {
      bottom: 0px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
`;
export const FixtureInner = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.medium_blue};
  margin-bottom: -24px;

  @media ${({ theme }) => theme.mediaSize.sm} {
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: fit-content;
  }
`;
export const InfoSection = styled.div`
  width: 1024px;
  padding: 0 18px;
  padding-top: 48px;
  opacity: 0;
  animation-delay: 0.1s;
  animation: ${Opacity} 1.5s ease-in-out;
  animation-fill-mode: forwards;
  @media ${({ theme }) => theme.mediaSize.lg} {
    padding: 0px 24px;
    padding-top: 48px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 0px 146px;
    padding-top: 48px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 0px 290px;
    padding-top: 48px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 0px 338px;
    padding-top: 48px;
  }
`;
export const FixtureTabTitle = styled.div`
  margin-bottom: -24px;
  color: ${({ theme }) => theme.colors.middle_Skyblue};
  letter-spacing: -2px;
`;
export const FixtureTabContent = styled.div`
  width: 100%;
  padding-bottom: 24px;

  @media ${({ theme }) => theme.mediaSize.md} {
  }
`;
export const FixtureTabContentTop = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
  padding: 12px 0px;
`;
export const DateInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p32};
  font-weight: 900;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.middle_Skyblue};
`;
export const FixtureTabContentBottom = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    padding-top: 24px;
    pading-bottom: 24px;

    gap: 24px;
  }
`;
export const FixtureTabContentBottomInfoLogo = styled.span<Logo>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
  height: 48px;

  @media ${({ theme }) => theme.mediaSize.md} {
    position: absolute;
    left: 18px;
  }
`;
export const FixtureTabContentBottomInfoText = styled.div`
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  .result {
    position: absolute;
    right: -24px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.medium_blue};
    color: white;
  }
  width: 190px;
  div {
    display: flex;
    flex-direction: column;

    div {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.p15};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.p13};
      letter-spacing: -1px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.sub_text};
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    background: ${({ theme }) => theme.colors.info_BG};
    width: 100%;
    padding: 12px 18px;
    justify-content: center;
    position: relative;
    .result {
      display: none;
    }
  }
`;
export const FixtureTabContentBottomMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const FixtureTabContentBottomMainInner = styled.div<Logo>`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  width: 600px;

  :nth-child(1) {
    justify-content: end;
  }
  div {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.TitleColor};
    font-size: ${({ theme }) => theme.fontSize.p19};
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    letter-spacing: -1.2px;
    white-space: nowrap;
    width: 250px;
  }
  .score {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 12px;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.p30};
    color: ${({ theme }) => theme.colors.White};
    width: fit-content;

    span {
      background: ${({ theme }) => theme.colors.medium_blue};
      padding: 3px 12px;
      border-radius: 6px;
    }
  }
  .middle {
    background: ${({ theme }) => theme.colors.info_BG};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 10px 8px;
    width: 50px;

    p {
      font-size: ${({ theme }) => theme.fontSize.p17};

      line-height: 0.5;
    }
    i {
      font-size: ${({ theme }) => theme.fontSize.p12};
      text-decoration: none;
      font-style: normal;

      line-height: 0.5;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    div {
      font-size: ${({ theme }) => theme.fontSize.p15};
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    .score {
      display: flex;
      flex-direction: row;
      span {
        padding: 1px 10px;
      }
    }
    gap: 12px;
    div {
      font-size: ${({ theme }) => theme.fontSize.p14};

      gap: 5px;

      width: 140px;
      flex-direction: column-reverse;
    }
    :nth-child(3) {
      flex-direction: column;
    }
    .middle {
      width: 40px;
      gap: 8px;
      p {
        font-size: ${({ theme }) => theme.fontSize.p14};
      }
      i {
        font-size: ${({ theme }) => theme.fontSize.p9};
      }
    }
  }
`;
export const FixtureTabContentBottomSub = styled.div`
  color: ${({ theme }) => theme.colors.sub_text};
  font-size: ${({ theme }) => theme.fontSize.p14};
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p10};
  }
`;
export const TabLogo = styled.span<Logo>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 48px;
  height: 48px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 36px;
    height: 36px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 30px;
    height: 30px;
  }
`;
export const TicketSection = styled.div`
  padding: 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  transition: all 0.3s;

  &:hover {
    .btn {
      background: ${({ theme }) => theme.colors.Hover_Yell};
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    letter-spacing: -1px;

    width: 138px;
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  .btn {
    background: ${({ theme }) => theme.colors.Yell_Btn};
    width: 138px;
    padding: 12px 0px;
    font-size: ${({ theme }) => theme.fontSize.p17};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    div {
      width: 100%;
    }
  }
`;
export const AddContainer = styled.div<Logo>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.p11};
  color: ${({ theme }) => theme.colors.sub_text};
  padding-bottom: 48px;
  width: 1024px;

  div {
    background: url(${({ logo }) => logo});
    width: 728px;
    height: 90px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    padding: 48px 24px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 48px 146px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 48px 290px;

    div {
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 48px 338px;
  }
`;
export const LinkSection = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    gap: 6px;
    color: ${({ theme }) => theme.colors.TitleColor};
    transition: all 0.3s;
    font-size: ${({ theme }) => theme.fontSize.p20};
    svg {
      transition: all 0.3s;
      fill: ${({ theme }) => theme.colors.TitleColor};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.point_Skyblue};
      svg {
        fill: ${({ theme }) => theme.colors.point_Skyblue};
      }
    }
  }
`;
