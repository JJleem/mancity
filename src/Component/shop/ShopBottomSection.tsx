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
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwa452490e/images/2024_campaigns/homepage_awaykit2425/content_block_awaykit2425launch_prematch_v1.jpg?sw=950&sfrm=jpg"></SectionOneImg>
            <SectionOneSub>Pre-Match Collection</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw0479525d/images/2024_campaigns/homepage_homekit2425/content_block_homekit2425_generic.jpg"></SectionOneImg>
            <SectionOneSub>Shop 2024/25 Home Kit</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
        <SectionTwo>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw0df612b3/images/2024_campaigns/homepage_awaykit2425/content_rectangle_awaykit2425_men_walker.jpg?sw=768&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Men's Away Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwaca1f0fe/images/2024_campaigns/homepage_awaykit2425/content_rectangle_awaykit2425_kids-v2.jpg?sw=768&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Kid's Away Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwd321fb88/images/2024_campaigns/homepage_awaykit2425/content_rectangle_awaykit2425_alexandri.jpg?sw=768&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Women's Away Kit</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImgtwo imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw113db444/images/2024_campaigns/homepage_awaykit2425/content_rectangle_awaykit2425_ederson.jpg?sw=768&sfrm=jpg"></SectionOneImgtwo>
            <SectionOneSub>Goalkeeper Kits</SectionOneSub>
          </SectionOneOne>
        </SectionTwo>

        <SectionOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw1c4b660f/images/2024_campaigns/homepage_awaykit2425/content_block_awaykit2425launch_leisurewear_v2-2.jpg?sw=768&sfrm=jpg"></SectionOneImg>
            <SectionOneSub>Discover Leisurewear</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwef76be0a/images/2024_campaigns/homepage_awaykit2425/content_block_awaykit2425_club-font.jpg?sw=768&sfrm=jpg"></SectionOneImg>
            <SectionOneSub>New: Noel Gallagher Font</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
        <SectionOne>
          <SectionOneOne>
            <SectionOneImg
              style={{ height: "200px" }}
              imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw239eed6c/images/2024_campaigns/homepage_awaykit2425/content_block_bottom_awaykit2425_women.jpg?sw=768&sfrm=jpg"
            ></SectionOneImg>
            <SectionOneSub>Shop Women's Team</SectionOneSub>
          </SectionOneOne>
          <SectionOneOne>
            <SectionOneImg
              style={{ height: "200px" }}
              imgs="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw293161ea/images/2024_campaigns/homepage_thirdkit2425/content_block-bottom-thirdkit2425_950x407-doku.jpg?sw=768&sfrm=jpg"
            ></SectionOneImg>
            <SectionOneSub>Our 2024/25 Third Kit</SectionOneSub>
          </SectionOneOne>
        </SectionOne>
      </BottomInner>
    </BottomContainer>
  );
};

export default ShopBottomSection;
