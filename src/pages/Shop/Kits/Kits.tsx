import React from "react";
import { NewsContainer } from "../../News/StyleNews";
import { Helmet } from "react-helmet";
import { ShopMainTop } from "../StyleShop";
import {
  KitsMainContainer,
  KitsMainImg,
  KitsMainImgSection,
  KitsMainSub,
  KitsMainSubInner,
} from "./StyleKits";
import KitsList from "../../../Component/shop/kits/KitsList";
import Footer from "../../../Component/common/footer/Footer";

const Kits = () => {
  return (
    <NewsContainer>
      <Helmet>
        <title> Manchester City - The Official Online Shop</title>
      </Helmet>

      <KitsMainContainer>
        <ShopMainTop>DISCOVERY OUR 24/25 AWAY KIT</ShopMainTop>
        <KitsMainImgSection>
          <KitsMainImg></KitsMainImg>
          <KitsMainSub>
            <KitsMainSubInner>
              <div className="left">
                <p>KITS</p>
                <span>Our 2024/25 Away Kit range</span>
              </div>
              <div className="right">
                The 2024/25 Man City Away Kit marks the 25th anniversary of the
                historic playoff final, a turning point in the club's fortunes.
                To celebrate, we’re bringing back a certified classic that
                stands as a testament to the club and the unwavering spirit of
                its fans. How’s that for a comeback?
              </div>
            </KitsMainSubInner>
          </KitsMainSub>
        </KitsMainImgSection>
        <KitsList></KitsList>
      </KitsMainContainer>
      <Footer />
    </NewsContainer>
  );
};

export default Kits;
