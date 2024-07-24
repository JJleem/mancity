import styled from "styled-components";
import { Opacity } from "../../../pages/StyleMainHome";

export const NewsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
  position: relative;
`;
export const NewsSectionInner = styled.div`
  width: 100%;
  border: 1px solid #f00;
  display: flex;
  justify-content: center;
  animation: ${Opacity} 1.5s ease-in-out;
  flex-direction: column;
`;
export const NewsSectionTitle = styled.div``;
export const NewsSectionBg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50vh;
  border: 1px solid #f00;
`;
export const Gif = styled.div`
  width: 970px;
  height: 80px;
  background-image: url("https://tpc.googlesyndication.com/simgad/11616952205793952351");
`;
