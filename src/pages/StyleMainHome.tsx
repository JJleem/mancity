import styled from "styled-components";

type Props = {
  isActive?: boolean;
  img?: string;
};
export const MainHomeContainer = styled.div`
  width: 100%;
  /* padding-top: 78px; */
  /* padding-bottom: 1000px; */
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  /* gap: 28px; */
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 174px;
  }
`;
export const MainHomeInner = styled.div`
  width: 100%;

  /* padding: 0 18px; */
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 68vh;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: fit-content;
  }
`;
