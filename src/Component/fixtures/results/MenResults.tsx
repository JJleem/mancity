import React from "react";
import {
  DateInfo,
  FixtureTabContent,
  FixtureTabContentBottom,
  FixtureTabContentBottomInfoLogo,
  FixtureTabContentBottomInfoText,
  FixtureTabContentBottomMain,
  FixtureTabContentBottomMainInner,
  FixtureTabContentBottomSub,
  FixtureTabContentTop,
  LinkSection,
  TabLogo,
  TicketSection,
} from "../../../pages/Fixtures/StyleFixtures";
import Fixturedb from "../../../data/MenResultDb.json";
import { Link } from "react-router-dom";
const MenResults = () => {
  return (
    <>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>JULY 2024</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["JULY 2024"].map((fixture, index) => (
          <FixtureTabContentBottom key={fixture.id}>
            <FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomInfoLogo
                logo={fixture.typelogo}
              ></FixtureTabContentBottomInfoLogo>
              <div>
                <div>{fixture.date}</div>
                <p>{fixture.typetext}</p>
              </div>
              <span className="result">L</span>
            </FixtureTabContentBottomInfoText>
            <FixtureTabContentBottomMain>
              <FixtureTabContentBottomMainInner>
                <div>
                  {fixture.HomeName}
                  <TabLogo logo={fixture.Homelogo}></TabLogo>
                </div>
                <div className="score">
                  <span>{fixture.homeScore}</span>
                  <span>{fixture.awayScore}</span>
                </div>

                <div>
                  <TabLogo logo={fixture.Awaylogo}></TabLogo>
                  {fixture.AwayName}
                </div>
              </FixtureTabContentBottomMainInner>
              {fixture.Sub === "" ? null : (
                <FixtureTabContentBottomSub>
                  {fixture.Sub}
                </FixtureTabContentBottomSub>
              )}
            </FixtureTabContentBottomMain>
            <LinkSection>
              <Link to={`"fixture.link"`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                HIGHLIGHT
              </Link>
            </LinkSection>
          </FixtureTabContentBottom>
        ))}
      </FixtureTabContent>
      <FixtureTabContent></FixtureTabContent>
    </>
  );
};

export default MenResults;
