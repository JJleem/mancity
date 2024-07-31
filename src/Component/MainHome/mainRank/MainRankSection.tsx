import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  LatestMatchBottomInner,
  LatestMatchBottomInnerInfo,
  LatestMatchBottomInnerLogo,
  LatestMatchBottomInnerText,
  LatestMatchSection,
  LatestMatchTopInner,
  ListClub,
  ListDraw,
  ListLose,
  ListMatch,
  ListPoint,
  ListRank,
  ListSection,
  ListWin,
  RankList,
  RankNumber,
  RankSection,
  RankSectionContent,
  RankSectionContentBox,
  RankSectionInner,
  RankSectionTitle,
} from "./StyleMainRank";
import { useNavigate } from "react-router-dom";

import city from "../../../assets/img/logo/mainlogo.png";
import celtic from "../../../assets/img/logo/Celtic_FC.png";
const MainRankSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const handleHighlights = () => {
    navigate("/news/5");
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
                (28<p>W</p> 7<p>D</p> 3<p>L</p> 91<p>Pt</p> )
              </h3>
              <div onClick={handleNavigate}>Learn More</div>
            </RankNumber>
            <RankList>
              <ListSection id="first">
                <ListRank>Ranking</ListRank>
                <ListClub>Club</ListClub>
                <ListMatch>Game</ListMatch>
                <ListPoint>Points</ListPoint>
                <ListWin>Win</ListWin>
                <ListDraw>Draw</ListDraw>
                <ListLose>Lose</ListLose>
              </ListSection>
              <ListSection>
                <ListRank>1</ListRank>
                <ListClub>
                  <i></i>Manchster City
                </ListClub>
                <ListMatch>38</ListMatch>
                <ListPoint>91</ListPoint>
                <ListWin>28</ListWin>
                <ListDraw>7</ListDraw>
                <ListLose>3</ListLose>
              </ListSection>
              <ListSection>
                <ListRank>2</ListRank>
                <ListClub>
                  <i></i>Arsnal
                </ListClub>
                <ListMatch>38</ListMatch>
                <ListPoint>89</ListPoint>
                <ListWin>28</ListWin>
                <ListDraw>5</ListDraw>
                <ListLose>5</ListLose>
              </ListSection>
              <ListSection>
                <ListRank>3</ListRank>
                <ListClub>
                  <i></i>Liverpool
                </ListClub>
                <ListMatch>38</ListMatch>
                <ListPoint>82</ListPoint>
                <ListWin>24</ListWin>
                <ListDraw>10</ListDraw>
                <ListLose>4</ListLose>
              </ListSection>
              <ListSection>
                <ListRank>4</ListRank>
                <ListClub>
                  <i></i>Aston Villa
                </ListClub>
                <ListMatch>38</ListMatch>
                <ListPoint>68</ListPoint>
                <ListWin>20</ListWin>
                <ListDraw>8</ListDraw>
                <ListLose>10</ListLose>
              </ListSection>
            </RankList>
          </RankSectionContentBox>
          <LatestMatchSection>
            <LatestMatchTopInner>
              LATEST <span>RESULT</span>
            </LatestMatchTopInner>
            <LatestMatchBottomInner>
              <LatestMatchBottomInnerInfo>
                <LatestMatchBottomInnerLogo
                  logo={city}
                ></LatestMatchBottomInnerLogo>
                <LatestMatchBottomInnerText>
                  <div>2024.07.24</div>
                  <div>USA Tour 2024</div>
                  <div>3 : 4</div>
                  <div>the Kenan Memorial Stadium</div>
                </LatestMatchBottomInnerText>
                <LatestMatchBottomInnerLogo
                  logo={celtic}
                ></LatestMatchBottomInnerLogo>
              </LatestMatchBottomInnerInfo>
              <ButtonContainer>
                <Button onClick={handleHighlights}>WATCH HIGHLIGHTS</Button>
              </ButtonContainer>
            </LatestMatchBottomInner>
          </LatestMatchSection>
        </RankSectionContent>
      </RankSectionInner>
    </RankSection>
  );
};

export default MainRankSection;
