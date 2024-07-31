import styled from "styled-components";
type logo = {
  logo?: string;
};
export const MenTablesContainer = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;
export const MenTablesLogo = styled.div<logo>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 213px;
  height: 48px;
`;
export const MenTablesSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.TitleColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  flex-direction: column;
  .header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.TitleColor};
    height: 40px;
    color: ${({ theme }) => theme.colors.sub_text};
    li {
      font-size: ${({ theme }) => theme.fontSize.p16};
    }
    .headerPts {
      height: 40px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    .header {
      border-bottom: 1px solid ${({ theme }) => theme.colors.TitleColor};
      height: 40px;
      color: ${({ theme }) => theme.colors.sub_text};
      li {
        font-size: ${({ theme }) => theme.fontSize.p12};
      }
      .headerPts {
        height: 40px;
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    .header {
      border-bottom: 1px solid ${({ theme }) => theme.colors.TitleColor};
      height: 40px;
      color: ${({ theme }) => theme.colors.sub_text};
      li {
        font-size: ${({ theme }) => theme.fontSize.p10};
      }
      .headerPts {
        height: 40px;
      }
      :last-child {
        width: 40px;
      }
      :nth-child(3) {
        font-size: ${({ theme }) => theme.fontSize.p14};
      }
      :nth-child(2) {
        font-size: ${({ theme }) => theme.fontSize.p14};
      }
    }
  }
`;
export const MenTablesRank = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.info_BG};
  padding-bottom: -3px;
  color: ${({ theme }) => theme.colors.TitleColor};
  li {
    width: 5%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    font-size: ${({ theme }) => theme.fontSize.p18};
  }
  :nth-child(3) {
    width: 300px;
    display: flex;
    justify-content: start;
    font-weight: 700;
  }
  :nth-child(11) {
    background: rgba(0, 24, 56, 0.1);
    font-weight: 700;
  }
  :nth-child(12) {
    width: 90px;
    justify-content: start;
    padding-left: 6px;
  }

  @media ${({ theme }) => theme.mediaSize.sm} {
    li {
      width: 7%;
      font-size: ${({ theme }) => theme.fontSize.p14};
      letter-spacing: -1px;
    }
    :nth-child(3) {
      width: 250px;
      display: flex;
      justify-content: start;
      font-weight: 700;
    }
    :nth-child(12) {
      width: 50px;
      justify-content: start;
      padding-left: 6px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    li {
      width: 9%;
      font-size: ${({ theme }) => theme.fontSize.p14};
      letter-spacing: -1px;
    }
    :nth-child(3) {
      width: 250px;
      display: flex;
      justify-content: start;
      font-weight: 700;
    }
    :nth-child(12) {
      width: 40px;
      justify-content: start;
      padding-left: 6px;
    }
    :nth-child(10) {
      display: none;
    }
    :nth-child(9) {
      display: none;
    }
    :nth-child(8) {
      display: none;
    }
  }
`;
export const MenTablesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ul:nth-child(4) {
    border: none;
  }
  ul:nth-child(5) {
    border-top: 1px dashed ${({ theme }) => theme.colors.TitleColor};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.TitleColor};
  }
  ul:nth-child(13) {
    background: rgb(59, 214, 255, 0.3);
    border: none;
  }
  ul:nth-child(12) {
    border: none;
  }
  ul:nth-child(17) {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.TitleColor};
  }
  .women:nth-child(9) {
    background: rgb(59, 214, 255, 0.3);
    border-bottom: 1px dashed ${({ theme }) => theme.colors.TitleColor};
  }
  .women:nth-child(8) {
    border: none;
  }
`;
export const Logo = styled.span<logo>`
  background: url(${({ logo }) => logo});
  width: 36px;
  height: 36px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 24px;
    height: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
  }
`;
export const SubText = styled.div`
  padding: 12px 0px;
  padding-bottom: 24px;
`;
