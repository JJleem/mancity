import React, { useEffect, useState } from "react";
import {
  BottomContainer,
  BottomInner,
  SectionOne,
  SectionOneImg,
  SectionOneImgtwo,
  SectionOneOne,
  SectionOneSub,
  SectionTwo,
  ShopMainPickContainer,
} from "../../pages/Shop/StyleShop";

const ShopBottomSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BottomContainer scroll={scrollY}>
      <BottomInner>
        <SectionOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw6ef15856/images/2024_campaigns/homepage_thirdkit2425/content_block_thirdkit2425_pre-match.jpg"></SectionOneImg>
            <SectionOneSub>Pre-Match Collection</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw0479525d/images/2024_campaigns/homepage_homekit2425/content_block_homekit2425_generic.jpg"></SectionOneImg>
            <SectionOneSub>Shop 2024/25 Home Kit</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
        <SectionTwo>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwf17c8a2f/images/2024_campaigns/homepage_thirdkit2425/content_rectangle_thirdkit2425_men_grealish.jpg"></SectionOneImgtwo>
            <SectionOneSub>Men's Third Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw78d88c9f/images/2024_campaigns/homepage_thirdkit2425/content_rectangle_thirdit2425_kids.jpg"></SectionOneImgtwo>
            <SectionOneSub>Kids' Third Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwe85dfe5e/images/2024_campaigns/homepage_thirdkit2425/content_rectangle_thirdkit2425_women.jpg?sw=475&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Women's Third Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwbfa003c0/images/2024_campaigns/homepage_thirdkit2425/content_rectangle_thirdkit2425_goalkeeper.jpg?sw=475&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Goalkeeper Kits</SectionOneSub>
          </SectionOneOne>
        </SectionTwo>

        <SectionOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw40215946/images/2024_campaigns/homepage_thirdkit2425/content_block_thirdkit2425_leisurewear_v1.jpg?sw=950&sfrm=jpg"></SectionOneImg>
            <SectionOneSub>New In: Leisurewear</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcfe380db/images/2024_campaigns/homepage_thirdkit2425/content_block_thirdkit2425_tourfont_v3.jpg?sw=950&sfrm=jpg"></SectionOneImg>
            <SectionOneSub>WWE Tour Font</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
        <SectionOne>
          <SectionOneOne>
            <SectionOneImg
              style={{ height: "200px" }}
              imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwf23c74e9/images/2024_campaigns/homepage_thirdkit2425/content_block_bottom_thirdkitlaunch_women.jpg?sw=950&sfrm=jpg"
            ></SectionOneImg>
            <SectionOneSub>Shop Women's Team</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg
              style={{ height: "200px" }}
              imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw20edb306/images/2024_campaigns/homepage_thirdkit2425/content_block_bottom_thirdkit2425_leisurewear_v1.jpg?sw=950&sfrm=jpg"
            ></SectionOneImg>
            <SectionOneSub>Discover Accessories</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
      </BottomInner>
    </BottomContainer>
  );
};

export default ShopBottomSection;
