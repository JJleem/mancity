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
  gap: 48px;
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
`;
export const TicketContent = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
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
  margin-bottom: 1000px;
`;
export const UpcomingMatchTop = styled.div`
  padding: 24px;
  font-size: ${({ theme }) => theme.fontSize.p20};
  font-weight: 900;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.Yell_Btn};
`;
export const UpcomingMatchBottom = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #f00;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  select {
    padding: 6px 24px;
    padding-left: 12px;
    padding-right: 60px;
    background: ${({ theme }) => theme.colors.TitleColor};
    color: white;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.p19};

    option {
      background-color: #f00;
      &:hover {
        background-color: #f0f !important;
      }
      &:checked {
        background-color: #ff0;
      }
      &::selection {
        background-color: #f0f;
      }
    }
  }
`;
export const SelectBtn = styled.button`
  padding: 12px 24px;
`;
export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const Selected = styled.div<Open>`
  padding: 10px;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.colors.TitleColor};
  color: white;
  cursor: pointer;
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
`;

export const Options = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.sub_text};
  border: 1px solid #ccc;
  width: 100%;
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; /* isOpen에 따라 표시 */
  z-index: 10;
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
