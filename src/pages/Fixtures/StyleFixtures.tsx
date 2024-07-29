import styled from "styled-components";
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
    /* padding-bottom: 150px; */
  }
`;
export const InfoSection = styled.div`
  width: 1024px;
  padding: 0 18px;
  padding-top: 48px;
`;
export const FixtureTabTitle = styled.div`
  margin-bottom: -24px;
  color: ${({ theme }) => theme.colors.middle_Skyblue};
  letter-spacing: -2px;
`;
export const FixtureTabContent = styled.div`
  width: 100%;
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
  padding: 24px 0px;
  border: 1px solid #f00;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FixtureTabContentBottomInfoText = styled.div`
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  gap: 6px;
  align-items: center;
  span {
    background: url("https://www.mancity.com/meta/media/re5mofgu/microsoftteams-image-43.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
  }
  div {
    display: flex;
    flex-direction: column;

    div {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.p17};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.p14};
      letter-spacing: -1px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.sub_text};
    }
  }
`;
export const FixtureTabContentBottomMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FixtureTabContentBottomMainInner = styled.div<Logo>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  div {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.TitleColor};
    font-size: ${({ theme }) => theme.fontSize.p19};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  .middle {
    background: ${({ theme }) => theme.colors.info_BG};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 3px 8px;
    p {
      font-size: ${({ theme }) => theme.fontSize.p17};
    }
    i {
      font-size: ${({ theme }) => theme.fontSize.p12};
      text-decoration: none;
      font-style: normal;
    }
  }
`;
export const FixtureTabContentBottomSub = styled.div`
  color: ${({ theme }) => theme.colors.sub_text};
  font-size: ${({ theme }) => theme.fontSize.p14};
`;
export const TabLogo = styled.span<Logo>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
  height: 48px;
`;
export const TicketSection = styled.div`
  border: 1px solid #f00;
  padding: 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    background: #000;
    width: 150px;
  }
`;
