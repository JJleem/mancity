import React from "react";
import {
  DateInfo,
  FixtureTabContent,
  FixtureTabContentBottom,
  FixtureTabContentBottomInfoText,
  FixtureTabContentBottomMain,
  FixtureTabContentBottomMainInner,
  FixtureTabContentBottomSub,
  FixtureTabContentTop,
  TabLogo,
  TicketSection,
} from "../../../pages/Fixtures/StyleFixtures";

const MenFixtures = () => {
  return (
    <FixtureTabContent>
      <FixtureTabContentTop>
        <DateInfo>JULY 2024</DateInfo>
      </FixtureTabContentTop>
      <FixtureTabContentBottom>
        <FixtureTabContentBottomInfoText>
          <span></span>
          <div>
            <div>Wed31 Jul</div>
            <p>USA Tour 2024</p>
          </div>
        </FixtureTabContentBottomInfoText>
        <FixtureTabContentBottomMain>
          <FixtureTabContentBottomMainInner>
            <div>
              FC Barcelona{" "}
              <TabLogo logo="https://www.mancity.com/meta/media/re5mofgu/microsoftteams-image-43.png"></TabLogo>
            </div>
            <div className="middle">
              <p>08:00</p>
              <i>KST</i>
            </div>
            <div>
              <TabLogo logo="https://www.mancity.com/meta/media/re5mofgu/microsoftteams-image-43.png"></TabLogo>
              Manchescter City
            </div>
          </FixtureTabContentBottomMainInner>
          <FixtureTabContentBottomSub>
            Camping World Stadium, Orlando, Florida - 30th July 19:00 EDT
          </FixtureTabContentBottomSub>
        </FixtureTabContentBottomMain>
        <TicketSection>
          <div>
            <span></span>
            BUY NOW
          </div>
          <div className="btn">BUY NOW</div>
        </TicketSection>
      </FixtureTabContentBottom>
    </FixtureTabContent>
  );
};

export default MenFixtures;
