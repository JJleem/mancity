import styled from "styled-components";
type isShop = {
  isShop?: boolean;
};
type Imgs = {
  imgs?: string;
};
export const ShopNavContainer = styled.div<isShop>`
  width: 100%;
  position: fixed;
  top: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.middle_Skyblue};
  display: ${({ isShop }) => (isShop ? null : "none")};
  overflow-x: hidden;
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const ShopNavInner = styled.div`
  width: 1024px;
  padding: 10px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ShopNavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  & .active {
    background: rgba(152, 197, 233, 0.8);
    color: black;
    border-radius: 4px;
  }
  li {
    padding: 10px 10px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 12px;
    font-size: ${({ theme }) => theme.fontSize.p15};
    li {
      padding: 10px 10px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    gap: 12px;
    font-size: ${({ theme }) => theme.fontSize.p10};
    li {
      padding: 10px 10px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const ShopMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 63px;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding-top: 55px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding-top: 0px;
  }
`;
export const ShopMainTop = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.Yell_Btn};
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 3px 0px;
`;
export const ShopMainImgSection = styled.div`
  width: 100%;
  height: 527px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaSize.md} {
    height: 1000px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    height: 390px;
  }
`;
export const ShopMainImg = styled.div`
  background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwe3dac1d5/images/2024_campaigns/homepage_thirdkit2425/hero_desktop_thirdkit2425launch_v2.jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.mediaSize.lg} {
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwc6b19c86/images/2024_campaigns/homepage_thirdkit2425/hero_mobile_thirdkit2425launch_v1.jpg");
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    background: url("https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwc6b19c86/images/2024_campaigns/homepage_thirdkit2425/hero_mobile_thirdkit2425launch_v1.jpg");
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
`;
export const ShopMainSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  p {
    font-size: ${({ theme }) => theme.fontSize.p32};
    font-weight: 700;
    letter-spacing: -1.5px;
  }
  span {
    font-weight: 500;
  }
  div {
    background-color: ${({ theme }) => theme.colors.Yell_Btn};
    padding: 18px 24px;
    font-weight: 700;
    margin-top: 12px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.Hover_Yell};
    }
  }
`;
export const ShopMainPickContainer = styled.div`
  width: 100%;
  border: 1px solid #f00;
  color: ${({ theme }) => theme.colors.TitleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1000px;
`;
export const ShopMainPickInner = styled.div`
  width: 1024px;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ShopMainPickTop = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p25};
`;
export const ShopMainPickContent = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;
export const ShopMainPickBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.info_BG};
  box-shadow: 0px 0px 4px #ccc;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(221, 36, 124);
    box-shadow: 0px 0px 4px #dd247c;
    #img {
      background-color: rgb(221, 36, 124);
    }
  }
`;
export const ShopMainPickBoxImg = styled.div<Imgs>`
  background: url(${({ imgs }) => imgs});
  background-color: ${({ theme }) => theme.colors.info_BG};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 280px;
  transition: all 0.3s;
`;
export const ShopMainPickBoxInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 6px;
  padding-bottom: 6px;
`;
export const ShopMainPickBoxTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.p13};
`;
export const ShopMainPickBoxPrice = styled.span`
  font-weight: 900;
`;
