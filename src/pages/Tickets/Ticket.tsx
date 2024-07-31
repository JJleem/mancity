import React, { useState } from "react";
import { FixturesContainer, InfoSection } from "../Fixtures/StyleFixtures";
import {
  Option,
  Options,
  SelectBox,
  SelectBtn,
  SelectContainer,
  Selected,
  TicketBox,
  TicketBoxImg,
  TicketContent,
  TicketMain,
  TicketSection,
  TicketTextBottom,
  TicketTextSection,
  TicketTextTop,
  UpcomingMatchBottom,
  UpcomingMatchContainer,
  UpcomingMatchMain,
  UpcomingMatchTop,
} from "./StyleTicket";
import { useNavigate } from "react-router-dom";
const Ticket = () => {
  const navigate = useNavigate();
  const handleMenTicket = () => {
    navigate("/ticket/men");
  };
  const handleWomenTicket = () => {
    navigate("/ticket/women");
  };
  const [selectedOption, setSelectedOption] = useState<string>("Men's Team");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedTypeOption, setSelectedTypeOption] =
    useState<string>(" ");
  const [isOpenType, setIsTypeOpen] = useState<boolean>(false);
  const [hoveredTypeIndex, setHoveredTypeIndex] = useState<number | null>(null);
  const options = ["Men's Team", "Women's Team", "EDS Team", "Academy Team"];
  const womenOptions = [
    "All Competition",
    "Wodasdadmen's Team",
    "EDSdasd Team",
    "Acadedasdamy Team",
  ];
  console.log(hoveredIndex);
  return (
    <FixturesContainer>
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
          <UpcomingMatchContainer>
            <UpcomingMatchMain>
              <UpcomingMatchTop>UPCOMING MATCHES</UpcomingMatchTop>
              <UpcomingMatchBottom>
                <SelectContainer>
                  <Selected onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                    {selectedOption}
                  </Selected>
                  {isOpen && (
                    <Options isOpen={isOpen}>
                      {options.map((option, index) => (
                        <Option
                          key={index}
                          isHovered={hoveredIndex === index}
                          onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                          }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {option}
                        </Option>
                      ))}
                    </Options>
                  )}
                </SelectContainer>
                <SelectContainer>
                  <Selected
                    onClick={() => setIsTypeOpen(!isOpenType)}
                    isOpen={isOpenType}
                  >
                    {selectedTypeOption}
                  </Selected>
                  {isOpenType && (
                    <Options isOpen={isOpenType}>
                      {isOpenType && (
                        <Options isOpen={isOpenType}>
                          {(hoveredIndex === 0 || hoveredIndex === null) &&
                            options.map((option, index) => (
                              <Option
                                key={index}
                                isHovered={hoveredTypeIndex === index}
                                onClick={() => {
                                  setSelectedTypeOption(option);
                                  setIsTypeOpen(false);
                                }}
                                onMouseEnter={() => setHoveredTypeIndex(index)}
                                onMouseLeave={() => setHoveredTypeIndex(null)}
                              >
                                {option}
                              </Option>
                            ))}
                          {hoveredIndex === 1 &&
                            womenOptions.map((option, index) => (
                              <Option
                                key={index}
                                isHovered={hoveredTypeIndex === index}
                                onClick={() => {
                                  setSelectedTypeOption(option);
                                  setIsTypeOpen(false);
                                }}
                                onMouseEnter={() => setHoveredTypeIndex(index)}
                                onMouseLeave={() => setHoveredTypeIndex(null)}
                              >
                                {option}
                              </Option>
                            ))}
                        </Options>
                      )}
                    </Options>
                  )}
                </SelectContainer>
                <SelectBtn>FILTER</SelectBtn>
              </UpcomingMatchBottom>
            </UpcomingMatchMain>
          </UpcomingMatchContainer>
        </TicketSection>
      </InfoSection>
    </FixturesContainer>
  );
};

export default Ticket;
