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

const Fixtures = () => {
  const initialFixtureTabsState = () => {
    const storedTabs = localStorage.getItem("Fixturetabs");
    return storedTabs
      ? JSON.parse(storedTabs)
      : {
          fixtures: true,
          results: false,
          tables: false,
        };
  };
  const [Fixturetabs, setFixturetabs] = useState(initialFixtureTabsState);
  useEffect(() => {
    localStorage.setItem("Fixturetabs", JSON.stringify(Fixturetabs));
  }, [Fixturetabs]);
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

  const initialTabsState = () => {
    const storedTabs = localStorage.getItem("tabs");
    return storedTabs
      ? JSON.parse(storedTabs)
      : {
          men: true,
          women: false,
          academy: false,
          eds: false,
        };
  };
  const [tabs, setTabs] = useState(initialTabsState);
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  const handleTabClick = (tab: string) => {
    setTabs((prevTabs: any) => ({
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
            <Tabs onClick={() => handleTabClick("men")} isClick={tabs.men}>
              Men's Team
            </Tabs>
            <Tabs onClick={() => handleTabClick("women")} isClick={tabs.women}>
              Women's Team
            </Tabs>
            <Tabs onClick={() => handleTabClick("eds")} isClick={tabs.eds}>
              EDS
            </Tabs>
            <Tabs
              onClick={() => handleTabClick("academy")}
              isClick={tabs.academy}
            >
              Academy
            </Tabs>
          </NewsInfoTabs>
        </NewsInfoSection>
      </NewsInner>
      <InfoSection>
        {Fixturetabs.fixtures && tabs.men && <MenFixtures />}
        {Fixturetabs.fixtures && tabs.women && <WomenFixtures />}
        {Fixturetabs.fixtures && tabs.eds && <EDSFixtures />}
        {Fixturetabs.fixtures && tabs.academy && <AcademyFixtures />}
        {Fixturetabs.results && tabs.men && <MenResults />}
        {Fixturetabs.results && tabs.women && <WomenResult />}
        {Fixturetabs.results && tabs.eds && <EDSResult />}
        {Fixturetabs.results && tabs.academy && <AcademyResult />}
        {Fixturetabs.tables && tabs.men && <MenTables />}
        {Fixturetabs.tables && tabs.women && <WomenTables />}
        {Fixturetabs.tables && tabs.eds && <EDSTables />}
        {Fixturetabs.tables && tabs.academy && <AcademyTables />}
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
