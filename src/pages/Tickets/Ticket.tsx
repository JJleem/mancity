import React, { useEffect, useState } from "react";
import { FixturesContainer, InfoSection } from "../Fixtures/StyleFixtures";
import {
  TicketBox,
  TicketBoxImg,
  TicketContent,
  TicketMain,
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
import { Helmet } from "react-helmet";
import Footer from "../../Component/common/footer/Footer";
const Ticket = () => {
  const navigate = useNavigate();
  const handleMenTicket = () => {
    navigate("/ticket/men");
  };
  const handleWomenTicket = () => {
    navigate("/ticket/women");
  };
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
      <Helmet>
        <title>Buy Official Manchester City Tickets and Hospitality</title>
      </Helmet>
      <InfoSection>
        <TicketSection>
          <TicketMain>
            <div>Tickets and Hospitality</div>
            <span>
              Buy official Manchester City tickets and hospitality experiences
              direct from the Club
            </span>
          </TicketMain>
          <TicketContent>
            <TicketBox onClick={handleMenTicket}>
              <TicketBoxImg imgs="https://www.mancity.com/meta/media/rkphnxan/li106255-f.jpg?width=682&height=344&mode=crop"></TicketBoxImg>
              <TicketTextSection className="text">
                <TicketTextTop>
                  <div>MEN'S TICKETS</div>
                  <span>Buy Men's Team Tickets and Hospitality online.</span>
                </TicketTextTop>
                <TicketTextBottom>
                  All Men's Tickets
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </TicketTextBottom>
              </TicketTextSection>
            </TicketBox>
            <TicketBox onClick={handleWomenTicket}>
              <TicketBoxImg imgs="https://www.mancity.com/meta/media/hu2jjjwc/ip606365-2.jpg?width=682&height=344&mode=crop"></TicketBoxImg>
              <TicketTextSection className="text">
                <TicketTextTop>
                  <div>Women's Tickets</div>
                  <span>Buy Women's Team Tickets and Hospitality online.</span>
                </TicketTextTop>
                <TicketTextBottom>
                  All Women's Tickets
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </TicketTextBottom>
              </TicketTextSection>
            </TicketBox>
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

export default Ticket;
