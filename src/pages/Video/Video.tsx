import React, { useEffect, useState } from "react";
import {
  Addvcontainer,
  AddvSection,
  NewsContainer,
  NewsInfoSection,
  NewsInfoTabs,
  NewsInner,
  Tabs,
  TabsSection,
  TabTitle,
} from "../News/StyleNews";
import Footer from "../../Component/common/footer/Footer";
import TabsAll from "../../Component/news/tabs/all/TabsAll";
import TabsMen from "../../Component/news/tabs/men/TabsMen";
import TabsWomen from "../../Component/news/tabs/women/TabsWomen";
import TabsAcademy from "../../Component/news/tabs/academy/TabsAcademy";
import TabsClub from "../../Component/news/tabs/club/TabsClub";
import theme from "../../assets/theme/theme";
import VideoAll from "../../Component/Video/VideoAll";

const Video = () => {
  const initialTabsState = () => {
    const storedTabs = localStorage.getItem("tabs");
    return storedTabs
      ? JSON.parse(storedTabs)
      : {
          all: true,
        };
  };
  const [tabs, setTabs] = useState(initialTabsState);
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  const [title, setTitle] = useState("All VIDEO");

  const handleTabClick = (tab: string) => {
    setTabs((prevTabs: any) => ({
      ...prevTabs,
      [tab]: true,
      all: tab === "all",
    }));
    switch (tab) {
      case "all":
        setTitle("All VIDEO");
        break;

      default:
        setTitle("All VIDEO");
    }
  };

  return (
    <NewsContainer style={{ background: `${theme.colors.medium_blue}` }}>
      <NewsInner>
        <NewsInfoSection style={{ color: `${theme.colors.White}` }}>
          <div style={{ color: `${theme.colors.point_Skyblue}` }}>VIDEO</div>
          <NewsInfoTabs>
            <Tabs onClick={() => handleTabClick("all")} isClick={tabs.all}>
              All VIDEO
            </Tabs>
          </NewsInfoTabs>
        </NewsInfoSection>
      </NewsInner>
      <TabsSection>{tabs.all && <VideoAll />}</TabsSection>
      <AddvSection>
        <Addvcontainer logo="	https://tpc.googlesyndication.com/simgad/7537488314363285875" />
        <Addvcontainer logo="https://tpc.googlesyndication.com/simgad/11571053732377941700" />
        <Addvcontainer logo="https://tpc.googlesyndication.com/simgad/11456211663716220930" />
      </AddvSection>

      <Footer />
    </NewsContainer>
  );
};

export default Video;
