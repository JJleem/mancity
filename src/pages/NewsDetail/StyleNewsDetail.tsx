import { Link } from "react-router-dom";
import styled from "styled-components";
type imgProps = {
  imgs: string;
};
export const NewsDetailContainer = styled.div`
  width: 100%;

  padding-top: 78px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;

  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.medium_blue};
`;
export const NewsDetailImg = styled.div<imgProps>`
  width: 1024px;
  height: 600px;
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${({ theme }) => theme.mediaSize.lg} {
    width: 976px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 730px;
    height: 448px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 442px;
    height: 300px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 346px;
    height: 300px;
  }
`;
export const Goback = styled.button`
  width: 48px;
  height: 48px;
  padding: 8px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.point_Skyblue};
  border: 1px solid ${({ theme }) => theme.colors.point_Skyblue};
  svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.colors.medium_blue};
    }
  }
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.medium_blue};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.point_Skyblue};
      }
    }
  }
`;
export const GobackSection = styled.div`
  display: flex;

  width: 100%;
  padding: 24px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.point_Skyblue};
`;
export const NewsDetailSection = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media ${({ theme }) => theme.mediaSize.lg} {
    padding: 0px 24px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 0px 146px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 0px 290px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 0px 338px;
  }
`;
export const NewsDetailInner = styled.div`
  width: 100%;
`;
export const NewsDetailInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p17};
  gap: 24px;
`;
export const NewsDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.point_Skyblue};
  padding-bottom: 12px;
`;
export const NewsDetailTitleText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p32};
  @media ${({ theme }) => theme.mediaSize.lg} {
    font-size: ${({ theme }) => theme.fontSize.p28};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p22};
  }
`;
export const NewsDetailSubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p14};
  color: ${({ theme }) => theme.colors.middle_Skyblue};
  @media ${({ theme }) => theme.mediaSize.lg} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
`;
export const NewsDetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  letter-spacing: -0.5px;
`;
export const NewsDetailDesc = styled.div`
  white-space: pre-line;
  a {
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.point_Skyblue};
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSize.p18};
    &:hover {
      color: #000;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p15};
    a {
      font-size: ${({ theme }) => theme.fontSize.p17};
    }
  }
`;
export const APPDownload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  a {
    padding: 12px 48px;
    background: ${({ theme }) => theme.colors.Yell_Btn};
    color: ${({ theme }) => theme.colors.TitleColor};
    transition: all 0.3s;
    &:hover {
      background: ${({ theme }) => theme.colors.Hover_Yell};
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p16};
  }
`;
export const BottomEnd = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
  gap: 12px;
  font-size: ${({ theme }) => theme.fontSize.p20};
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
  }
`;
export const Topics = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  padding-top: 12px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const Share = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  padding-top: 12px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const TopicsList = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px 24px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const TopicsItem = styled.span`
  padding: 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.sub_text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.p17};
  &::before {
    content: "#";
    margin-right: 3px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
`;
export const ShareList = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 12px 12px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 10px;
    border: 3px solid ${({ theme }) => theme.colors.TitleColor};
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;

      path {
      }
    }
    &:hover {
      svg {
        fill: path {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
