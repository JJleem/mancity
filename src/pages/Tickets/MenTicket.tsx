import React, { useEffect, useState } from "react";
import { FixturesContainer, InfoSection } from "../Fixtures/StyleFixtures";
import {
  TicketBox,
  TicketBoxImg,
  TicketContent,
  TicketMain,
  TicketPic,
  TicketSection,
  TicketTextBottom,
  TicketTextSection,
  TicketTextTop,
} from "./StyleTicket";
import { useNavigate } from "react-router-dom";
import UpcomingMatches from "../../Component/ticket/UpcomingMatches";
import UpcomingMatchesFixture from "../../Component/ticket/MenAllCompetition/UpcomingMatchesFixture";
import {
  FillterState,
  hoveredIndexState,
  hoveredLocationIndexState,
  hoveredTypeIndexState,
} from "../../atom/atom";
import { useRecoilState } from "recoil";
import MenPremierLeague from "../../Component/ticket/MenPremierLeague/MenPremierLeague";
import NoResultMatches from "../../Component/ticket/NoResultMatches";
import MenPremierLeagueHome from "../../Component/ticket/MenPremierLeague/MenPremierLeagueHome";
import MenPremierLeagueAway from "../../Component/ticket/MenPremierLeague/MenPremierLeagueAway";
import UpcomingMatchesFixtureHome from "../../Component/ticket/MenAllCompetition/UpcomingMatchesFixtureHome";
import UpcomingMatchesFixtureAway from "../../Component/ticket/MenAllCompetition/UpcomingMatchesFixtureAway";
import WomenAllCompetition from "../../Component/ticket/WomenAllCompetition/WomenAllCompetition";
import WomenAllCompetitionHome from "../../Component/ticket/WomenAllCompetition/WomenAllCompetitionHome";
import WomenAllCompetitionAway from "../../Component/ticket/WomenAllCompetition/WomenAllCompetitionAway";
import WomenSuperLeague from "../../Component/ticket/WomenSuperLeague/WomenSuperLeague";
import WomenSuperLeagueHome from "../../Component/ticket/WomenSuperLeague/WomenSuperLeagueHome";
import WomenSuperLeagueAway from "../../Component/ticket/WomenSuperLeague/WomenSuperLeagueAway";
import EDSAllCompetition from "../../Component/ticket/EDSAllCompetition/EDSAllCompetition";
import Footer from "../../Component/common/footer/Footer";
const MenTicket = () => {
  const [hoveredTypeIndex, setHoveredTypeIndex] = useRecoilState(
    hoveredTypeIndexState
  );
  const [hoveredLocationIndex, setHoveredLocationIndex] = useRecoilState(
    hoveredLocationIndexState
  );
  const [hoveredIndex, setHoveredIndex] = useRecoilState(hoveredIndexState);
  const [isFillter, setIsFillter] = useRecoilState(FillterState);
  console.log(hoveredIndex, hoveredTypeIndex, hoveredLocationIndex, isFillter);
  useEffect(() => {
    if (
      hoveredIndex === 0 &&
      hoveredTypeIndex === 0 &&
      hoveredLocationIndex === 0 &&
      isFillter
    ) {
      console.log("Show UpcomingMatchesFixture");
    }
  }, [hoveredIndex, hoveredTypeIndex, hoveredLocationIndex, isFillter]);

  return (
    <FixturesContainer>
      <InfoSection>
        <TicketSection>
          <TicketPic imgs="https://www.mancity.com/meta/media/pw1deumm/pl-2324-trophy-landing-page-mobile.jpg?width=1024">
            <div>
              <span>Men's Team Ticket</span>
            </div>
          </TicketPic>
          <TicketContent>
            <div>
              To purchase tickets you will need a <i>Matchday Membership</i> or
              <i>Junior Membership</i>.
              <br /> Tickets are subject to availability and sales criteria for
              qualifying supporters.
            </div>
          </TicketContent>
          <UpcomingMatches type="men" />
          {/* men */}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 0 && <UpcomingMatchesFixture />}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 1 && <UpcomingMatchesFixtureHome />}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 2 && <UpcomingMatchesFixtureAway />}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 0 && <MenPremierLeague />}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 1 && <MenPremierLeagueHome />}
          {hoveredIndex === 0 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 2 && <MenPremierLeagueAway />}
          {hoveredIndex === 0 && hoveredTypeIndex === 2 && <NoResultMatches />}
          {hoveredIndex === 0 && hoveredTypeIndex === 3 && <NoResultMatches />}
          {hoveredIndex === 0 && hoveredTypeIndex === 4 && <NoResultMatches />}
          {/* men */}
          {/* women */}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 0 && <WomenAllCompetition />}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 1 && <WomenAllCompetitionHome />}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 2 && <WomenAllCompetitionAway />}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 0 && <WomenSuperLeague />}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 1 && <WomenSuperLeagueHome />}
          {hoveredIndex === 1 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 2 && <WomenSuperLeagueAway />}
          {hoveredIndex === 1 && hoveredTypeIndex === 2 && <NoResultMatches />}
          {hoveredIndex === 1 && hoveredTypeIndex === 3 && <NoResultMatches />}
          {hoveredIndex === 1 && hoveredTypeIndex === 4 && <NoResultMatches />}
          {/* women */}
          {/* EDS */}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 0 && <EDSAllCompetition />}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 1 && <NoResultMatches />}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 0 &&
            hoveredLocationIndex === 2 && <EDSAllCompetition />}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 0 && <EDSAllCompetition />}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 1 && <NoResultMatches />}
          {hoveredIndex === 2 &&
            hoveredTypeIndex === 1 &&
            hoveredLocationIndex === 2 && <EDSAllCompetition />}
          {/* EDS */}
          {/* ACADEMY */}
          {hoveredIndex === 3 && <NoResultMatches />}
          {/* ACADEMY */}
        </TicketSection>
      </InfoSection>
      <Footer />
    </FixturesContainer>
  );
};

export default MenTicket;
