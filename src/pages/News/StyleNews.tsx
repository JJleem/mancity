import styled from "styled-components";
import { Opacity } from "../MainHome/StyleMainHome";
type isClick = {
  isClick: boolean;
};
type logo = {
  logo?: string;
};
export const NewsContainer = styled.div`
  width: 100%;

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
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: fit-content;
    padding-bottom: 0px;
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
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
  }
`;
export const NewsInfoTabs = styled.div`
  display: flex;
  gap: 24px;

  width: 100%;
  @media ${({ theme }) => theme.mediaSize.sm} {
    gap: 12px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p12};
    padding-right: 12px;

    &::before {
      content: "";
      position: absolute;
      width: calc(100% - 12px);
      bottom: ${({ isClick }) => (isClick ? "0px" : "-4px")};
      border: 2px solid ${({ theme }) => theme.colors.Header_BG};
      transition: all 0.2s;
    }
  }
`;
export const TabsSection = styled.div`
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
  @media ${({ theme }) => theme.mediaSize.md} {
    text-align: center;
  }
`;
export const Addvcontainer = styled.div<logo>`
  background: url(${({ logo }) => logo});
  width: 300px;
  height: 250px;
  background-repeat: no-repeat;
`;
export const AddvSection = styled.div`
  display: flex;

  width: 1024px;
  justify-content: space-between;
  align-items: center;
`;
