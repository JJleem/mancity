import React, { useState } from "react";
import {
  NewsContainer,
  NewsInfoSection,
  NewsInfoTabs,
  NewsInner,
  Tabs,
  TabsSection,
  TabTitle,
} from "./StyleNews";
import Footer from "../../Component/common/footer/Footer";
import TabsAll from "../../Component/news/tabs/all/TabsAll";
import TabsMen from "../../Component/news/tabs/men/TabsMen";
import TabsWomen from "../../Component/news/tabs/women/TabsWomen";
import TabsAcademy from "../../Component/news/tabs/academy/TabsAcademy";
import TabsClub from "../../Component/news/tabs/club/TabsClub";

const News = () => {
  const [tabs, setTabs] = useState({
    all: true,
    men: false,
    women: false,
    academy: false,
    club: false,
  });
  const [title, setTitle] = useState("All News");
  const handleTabClick = (tab: string) => {
    setTabs((prevTabs) => ({
      ...prevTabs,
      [tab]: true,
      all: tab === "all",
      men: tab === "men",
      women: tab === "women",
      academy: tab === "academy",
      club: tab === "club",
    }));
    switch (tab) {
      case "all":
        setTitle("All News");
        break;
      case "men":
        setTitle("Men's News");
        break;
      case "women":
        setTitle("Women's News");
        break;
      case "academy":
        setTitle("EDS & ACADEMY News");
        break;
      case "club":
        setTitle("Club News");
        break;
      default:
        setTitle("All News");
    }
  };

  return (
    <NewsContainer>
      <NewsInner>
        <NewsInfoSection>
          <div>NEWS</div>
          <NewsInfoTabs>
            <Tabs onClick={() => handleTabClick("all")} isClick={tabs.all}>
              All News
            </Tabs>
            <Tabs onClick={() => handleTabClick("men")} isClick={tabs.men}>
              Men's Team
            </Tabs>
            <Tabs onClick={() => handleTabClick("women")} isClick={tabs.women}>
              Women's Team
            </Tabs>
            <Tabs
              onClick={() => handleTabClick("academy")}
              isClick={tabs.academy}
            >
              EDS & ACADEMY
            </Tabs>
            <Tabs onClick={() => handleTabClick("club")} isClick={tabs.club}>
              Club News
            </Tabs>
          </NewsInfoTabs>
        </NewsInfoSection>
      </NewsInner>
      <TabsSection>
        <TabTitle>{title}</TabTitle>
        {tabs.all && <TabsAll />}
        {tabs.men && <TabsMen />}
        {tabs.women && <TabsWomen />}
        {tabs.academy && <TabsAcademy />}
        {tabs.club && <TabsClub />}
      </TabsSection>

      <Footer />
    </NewsContainer>
  );
};

export default News;
