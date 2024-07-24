import React, { useEffect, useState } from "react";
import {
  RankList,
  RankNumber,
  RankSection,
  RankSectionContent,
  RankSectionContentBox,
  RankSectionInner,
  RankSectionTitle,
} from "./StyleMainRank";
import { useNavigate } from "react-router-dom";
const MainRankSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
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
  console.log(scrollY);
  return (
    <RankSection>
      <RankSectionInner scroll={scrollY}>
        <RankSectionTitle>
          <i></i>
          <span>
            <p>INFO</p>RMATION
          </span>
        </RankSectionTitle>
        <RankSectionContent>
          <RankSectionContentBox>
            <RankNumber>
              <span></span>
              <p>1</p>
              <h2>2023-24</h2>
              <h3>
                (99<p>W</p> 10<p>D</p> 10<p>L</p> 90<p>pt</p> )
              </h3>
              <div onClick={handleNavigate}>Learn More</div>
            </RankNumber>
            <RankList></RankList>
          </RankSectionContentBox>
          <div></div>
        </RankSectionContent>
      </RankSectionInner>
    </RankSection>
  );
};

export default MainRankSection;
