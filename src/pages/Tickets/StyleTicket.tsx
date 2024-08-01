import styled from "styled-components";
import down from "../../assets/img/icon/arrow_down.png";
import check from "../../assets/img/icon/check.png";
type Props = {
  imgs?: string;
};
type Open = {
  isOpen?: boolean;
};
export const TicketSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TicketMain = styled.div`
  background: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  gap: 12px;
  font-weight: 700;
  div {
    font-size: 56px;
    color: ${({ theme }) => theme.colors.Yell_Btn};
    letter-spacing: -3px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.p19};
    color: ${({ theme }) => theme.colors.White};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    div {
      font-size: 36px;
    }
    span {
      font-size: 14px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    div {
      font-size: 28px;
    }
    span {
      font-size: 10px;
    }
  }
`;
export const TicketContent = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSize.p19};
  font-weight: 700;
  div {
    i {
      color: ${({ theme }) => theme.colors.point_Skyblue};
      letter-spacing: -1px;
      text-decoration: underline;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
  }
`;
export const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    .text {
      background: ${({ theme }) => theme.colors.TitleColor};
      color: ${({ theme }) => theme.colors.Yell_Btn};
      border: 1px solid ${({ theme }) => theme.colors.TitleColor};
      border-top: none;
      span {
        color: ${({ theme }) => theme.colors.Hover_Yell};
      }
      svg {
        fill: ${({ theme }) => theme.colors.point_Skyblue};
      }
    }
  }
`;

export const TicketBoxImg = styled.div<Props>`
  width: 100%;
  height: 344px;
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TicketTextSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  border-top: none;
  transition: all 0.2s;
`;
export const TicketTextTop = styled.div`
  width: 100%;
  padding: 24px 24px;
  div {
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.p25};
    letter-spacing: -1px;
  }
  span {
    color: ${({ theme }) => theme.colors.sub_text};
    font-size: ${({ theme }) => theme.fontSize.p15};
  }
`;
export const TicketTextBottom = styled.div`
  width: 100%;
  padding: 12px 24px;
  padding-top: 0px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p20};
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
  }
`;
export const UpcomingMatchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UpcomingMatchMain = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.TitleColor};
`;
export const UpcomingMatchTop = styled.div`
  padding: 24px;
  font-size: ${({ theme }) => theme.fontSize.p24};
  font-weight: 900;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.Yell_Btn};
`;
export const UpcomingMatchBottom = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 12px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
  }
`;

export const SelectBtn = styled.button`
  padding: 12px 24px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.p18};
  font-weight: 900;
  background-color: ${({ theme }) => theme.colors.Yell_Btn};
  color: ${({ theme }) => theme.colors.TitleColor};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.Hover_Yell};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 60%;
    padding: 12px 0px;
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    margin-top: 12px;
  }
`;
export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.p18};
  color: ${({ theme }) => theme.colors.White};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const Selected = styled.div<Open>`
  width: 100%;
  padding: 10px 30px;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.colors.TitleColor};
  color: white;
  cursor: pointer;
  z-index: 12;
  &::after {
    content: "";
    position: absolute;
    color: White;
    top: 50%;
    z-index: 11;
    right: 6px;
    background: url(${down});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.1s;
    transform: ${({ isOpen }) =>
      isOpen ? "translate(0, -50%) rotate(-180deg)" : "translate(0, -50%) "};
    width: 24px;
    height: 24px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const Options = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.sub_text};
  border: 1px solid #ccc;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 12;
`;

export const Option = styled.div<{ isHovered: boolean }>`
  padding: 10px;
  background-color: ${({ isHovered }) =>
    isHovered ? "#001838" : "transparent"};
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.TitleColor};
  }
  position: relative;
  &::after {
    content: "";
    position: absolute;
    color: White;
    top: 50%;
    z-index: 11;
    right: 6px;
    transform: translate(0, -50%);
    width: 24px;
    height: 24px;
    background: url(${({ isHovered }) => (isHovered ? check : "")});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const TicketPic = styled.div<Props>`
  background: url(${({ imgs }) => imgs});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  gap: 12px;
  font-weight: 700;
  height: 320px;
  position: relative;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
  }
  p {
    color: ${({ theme }) => theme.colors.info_BG};
  }
  span {
    font-size: 56px;
    color: ${({ theme }) => theme.colors.White};
    letter-spacing: -3px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    div {
    }
    span {
      font-size: 36px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    div {
    }
    span {
      font-size: 28px;
    }
  }
`;
