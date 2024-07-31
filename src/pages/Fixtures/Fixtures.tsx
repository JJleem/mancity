import React, { useEffect, useState } from "react";
import {
  AddContainer,
  FixtureInfoSection,
  FixtureInfoTabs,
  FixtureInner,
  FixturesContainer,
  FixturesList,
  FixtureTabTitle,
  FixureTabs,
  InfoSection,
} from "./StyleFixtures";
import {
  NewsInfoSection,
  NewsInfoTabs,
  NewsInner,
  Tabs,
  TabTitle,
} from "../News/StyleNews";
import MenFixtures from "../../Component/fixtures/fixture/MenFixtures";
import WomenFixtures from "../../Component/fixtures/fixture/WomenFixtures";
import EDSFixtures from "../../Component/fixtures/fixture/EDSFixtures";
import AcademyFixtures from "../../Component/fixtures/fixture/AcademyFixtures";
import MenResults from "../../Component/fixtures/results/MenResults";
import WomenResult from "../../Component/fixtures/results/WomenResult";
import EDSResult from "../../Component/fixtures/results/EDSResult";
import AcademyResult from "../../Component/fixtures/results/AcademyResult";
import MenTables from "../../Component/fixtures/tables/MenTables";
import WomenTables from "../../Component/fixtures/tables/WomenTables";
import EDSTables from "../../Component/fixtures/tables/EDSTables";
import AcademyTables from "../../Component/fixtures/tables/AcademyTables";
import { NewsContainer } from "../../Component/news/tabs/all/StyleTabsAll";
import Footer from "../../Component/common/footer/Footer";
import { useRecoilState } from "recoil";
import { fixtureTabsState } from "../../atom/atom";
import { fixtureTeamState } from "../../atom/atom";
const Fixtures = () => {
  const [Fixturetabs, setFixturetabs] = useRecoilState(fixtureTabsState);

  const [title, setTitle] = useState("FIXTURES");
  const handleFixtureTabClick = (tab: string) => {
    setFixturetabs((prevTabs: any) => ({
      ...prevTabs,
      [tab]: true,
      fixtures: tab === "fixtures",
      results: tab === "results",
      tables: tab === "tables",
    }));

    switch (tab) {
      case "fixtures":
        setTitle("FIXTURES");
        break;
      case "results":
        setTitle("RESULTS");
        break;
      case "tables":
        setTitle("TABLES");
        break;

      default:
        setTitle("FIXTURES");
    }
  };

  const [FixtureTeamtabs, setFixtureTeamtabs] =
    useRecoilState(fixtureTeamState);

  const handleTabClick = (tab: string) => {
    setFixtureTeamtabs((prevTabs: any) => ({
      ...prevTabs,
      [tab]: true,
      men: tab === "men",
      women: tab === "women",
      academy: tab === "academy",
      eds: tab === "eds",
    }));
  };

  return (
    <FixturesContainer>
      <FixtureInner>
        <FixtureInfoSection>
          <FixtureInfoTabs>
            <FixureTabs
              onClick={() => handleFixtureTabClick("fixtures")}
              isClick={Fixturetabs.fixtures}
            >
              Fixtures
            </FixureTabs>
            <FixureTabs
              onClick={() => handleFixtureTabClick("results")}
              isClick={Fixturetabs.results}
            >
              Results
            </FixureTabs>
            <FixureTabs
              onClick={() => handleFixtureTabClick("tables")}
              isClick={Fixturetabs.tables}
            >
              Tables
            </FixureTabs>
          </FixtureInfoTabs>
        </FixtureInfoSection>
      </FixtureInner>
      <NewsInner>
        <NewsInfoSection>
          <FixtureTabTitle>{title}</FixtureTabTitle>
          <NewsInfoTabs>
            <Tabs
              onClick={() => handleTabClick("men")}
              isClick={FixtureTeamtabs.men}
            >
              Men's Team
            </Tabs>
            <Tabs
              onClick={() => handleTabClick("women")}
              isClick={FixtureTeamtabs.women}
            >
              Women's Team
            </Tabs>
            <Tabs
              onClick={() => handleTabClick("eds")}
              isClick={FixtureTeamtabs.eds}
            >
              EDS
            </Tabs>
            <Tabs
              onClick={() => handleTabClick("academy")}
              isClick={FixtureTeamtabs.academy}
            >
              Academy
            </Tabs>
          </NewsInfoTabs>
        </NewsInfoSection>
      </NewsInner>
      <InfoSection>
        {Fixturetabs.fixtures && FixtureTeamtabs.men && <MenFixtures />}
        {Fixturetabs.fixtures && FixtureTeamtabs.women && <WomenFixtures />}
        {Fixturetabs.fixtures && FixtureTeamtabs.eds && <EDSFixtures />}
        {Fixturetabs.fixtures && FixtureTeamtabs.academy && <AcademyFixtures />}
        {Fixturetabs.results && FixtureTeamtabs.men && <MenResults />}
        {Fixturetabs.results && FixtureTeamtabs.women && <WomenResult />}
        {Fixturetabs.results && FixtureTeamtabs.eds && <EDSResult />}
        {Fixturetabs.results && FixtureTeamtabs.academy && <AcademyResult />}
        {Fixturetabs.tables && FixtureTeamtabs.men && <MenTables />}
        {Fixturetabs.tables && FixtureTeamtabs.women && <WomenTables />}
        {Fixturetabs.tables && FixtureTeamtabs.eds && <EDSTables />}
        {Fixturetabs.tables && FixtureTeamtabs.academy && <AcademyTables />}
      </InfoSection>
      <AddContainer logo="https://tpc.googlesyndication.com/simgad/15422444033030513763">
        Advertisement
        <div></div>
      </AddContainer>
      <Footer />
    </FixturesContainer>
  );
};
export default Fixtures;
