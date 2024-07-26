import styled from "styled-components";
type isClick = {
  isClick: boolean;
};
export const NewsContainer = styled.div`
  width: 100%;
  border: 1px solid #f00;
  height: 100%;

  padding-top: 78px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  gap: 48px;
`;
export const NewsInner = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};

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
export const NewsInfoSection = styled.div`
  width: 1024px;

  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.p45};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.TitleColor};
  padding: 48px 18px;
  gap: 48px;
  padding-bottom: 0;
`;
export const NewsInfoTabs = styled.div`
  display: flex;
  gap: 24px;
`;
export const Tabs = styled.div<isClick>`
  border-right: 1px solid ${({ theme }) => theme.colors.medium_blue};
  font-size: ${({ theme }) => theme.fontSize.p17};
  padding-right: 24px;
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
    border: 2px solid ${({ theme }) => theme.colors.Header_BG};
    transition: all 0.2s;
  }
  &:hover {
    opacity: 1;
    &::before {
      bottom: 0px;
    }
  }
`;
export const TabsSection = styled.div`
  border: 1px solid #f00;
  width: 1024px;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;
export const TabTitle = styled.div`
  text-align: left;
  padding: 12px 18px;
  font-size: ${({ theme }) => theme.fontSize.p28};
  color: ${({ theme }) => theme.colors.TitleColor};
  font-weight: 900;
`;
