import React, { useEffect, useState } from "react";
import {
  Option,
  Options,
  SelectBox,
  SelectBtn,
  SelectContainer,
  Selected,
  UpcomingMatchBottom,
  UpcomingMatchContainer,
  UpcomingMatchMain,
  UpcomingMatchTop,
} from "../../pages/Tickets/StyleTicket";
import {
  FillterState,
  hoveredIndexState,
  hoveredLocationIndexState,
  hoveredTypeIndexState,
  isOpenLocationState,
  isOpenState,
  isOpenTypeState,
  selectedLocationOptionState,
  selectedOptionState,
  selectedTypeOptionState,
} from "../../atom/atom";
import { useRecoilState } from "recoil";

const UpcomingMatches = ({ type }: { type: string }) => {
  useEffect(() => {
    if (type === "women") {
      setHoveredIndex(1); // type이 "women"일 때 hoveredIndex를 1로 설정
      setSelectedOption("Women's Team");
    } else {
      setHoveredIndex(0); // 다른 경우에는 기본값으로 설정 (예: 0)
    }
  }, [type]); // type이 변경될 때마다 실행

  const [selectedOption, setSelectedOption] =
    useRecoilState(selectedOptionState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [hoveredIndex, setHoveredIndex] = useRecoilState(hoveredIndexState);

  const [selectedTypeOption, setSelectedTypeOption] = useRecoilState(
    selectedTypeOptionState
  );
  const [selectedLocationOption, setSelectedLocationOption] = useRecoilState(
    selectedLocationOptionState
  );
  const [isOpenType, setIsTypeOpen] = useRecoilState(isOpenTypeState);
  const [isOpenLocation, setIsLocationOpen] =
    useRecoilState(isOpenLocationState);
  const [hoveredTypeIndex, setHoveredTypeIndex] = useRecoilState(
    hoveredTypeIndexState
  );
  const [hoveredLocationIndex, setHoveredLocationIndex] = useRecoilState(
    hoveredLocationIndexState
  );
  const options = ["Men's Team", "Women's Team", "EDS Team", "Academy Team"];
  const menCompetition = [
    "All Competition",
    "Premier League",
    "Carabao Cup",
    "UEFA Champions League",
    "Emirates FA Cup",
  ];
  const womenCompetition = [
    "All Competition",
    "Women's Super League",
    "Women's FA Cup",
    "Continental League Cup",
    "UEFA Women's Champions League",
  ];
  const edsCompetition = ["All Competition", "UEFA Youth League"];
  const locationOptions = ["All Location", "Home", "Away"];
  const academyCompetition = ["All Location"];
  useEffect(() => {
    if (
      hoveredIndex === 0 ||
      hoveredIndex === null ||
      [1, 2, 3].includes(hoveredIndex)
    ) {
      setSelectedTypeOption("All Competition");
      setSelectedLocationOption("All Location");
      setHoveredTypeIndex(0);
      setHoveredLocationIndex(0);
    }
  }, [hoveredIndex]);

  useEffect(() => {
    if (
      hoveredTypeIndex === 0 ||
      hoveredTypeIndex === null ||
      [1, 2, 3, 4].includes(hoveredIndex)
    ) {
      setSelectedLocationOption("All Location");
      setHoveredLocationIndex(0);
    }
  }, [hoveredTypeIndex]);

  const [isFillter, setIsFillter] = useRecoilState(FillterState);
  const hadleFillter = () => {
    setIsFillter(!isFillter);
  };
  return (
    <UpcomingMatchContainer>
      <UpcomingMatchMain>
        <UpcomingMatchTop>UPCOMING MATCHES</UpcomingMatchTop>
        <UpcomingMatchBottom>
          <SelectBox>
            Team
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
                        setHoveredIndex(index);
                      }}
                    >
                      {option}
                    </Option>
                  ))}
                </Options>
              )}
            </SelectContainer>
          </SelectBox>
          <SelectBox>
            Competition
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
                        menCompetition.map((option, index) => (
                          <Option
                            key={index}
                            isHovered={hoveredTypeIndex === index}
                            onClick={() => {
                              setSelectedTypeOption(option);
                              setIsTypeOpen(false);
                              setHoveredTypeIndex(index);
                            }}
                          >
                            {option}
                          </Option>
                        ))}
                      {hoveredIndex === 1 &&
                        womenCompetition.map((option, index) => (
                          <Option
                            key={index}
                            isHovered={hoveredTypeIndex === index}
                            onClick={() => {
                              setSelectedTypeOption(option);
                              setIsTypeOpen(false);
                              setHoveredTypeIndex(index);
                            }}
                          >
                            {option}
                          </Option>
                        ))}
                      {hoveredIndex === 2 &&
                        edsCompetition.map((option, index) => (
                          <Option
                            key={index}
                            isHovered={hoveredTypeIndex === index}
                            onClick={() => {
                              setSelectedTypeOption(option);
                              setIsTypeOpen(false);
                              setHoveredTypeIndex(index);
                            }}
                          >
                            {option}
                          </Option>
                        ))}
                      {hoveredIndex === 3 &&
                        academyCompetition.map((option, index) => (
                          <Option
                            key={index}
                            isHovered={hoveredTypeIndex === index}
                            onClick={() => {
                              setSelectedTypeOption(option);
                              setIsTypeOpen(false);
                              setHoveredTypeIndex(index);
                            }}
                          >
                            {option}
                          </Option>
                        ))}
                    </Options>
                  )}
                </Options>
              )}
            </SelectContainer>
          </SelectBox>

          <SelectBox>
            Location
            <SelectContainer>
              <Selected
                onClick={() => setIsLocationOpen(!isOpenLocation)}
                isOpen={isOpenLocation}
              >
                {selectedLocationOption}
              </Selected>
              {isOpenLocation && (
                <Options isOpen={isOpenLocation}>
                  {locationOptions.map((option, index) => (
                    <Option
                      key={index}
                      isHovered={hoveredLocationIndex === index}
                      onClick={() => {
                        setSelectedLocationOption(option);
                        setIsLocationOpen(false);
                        setHoveredLocationIndex(index);
                      }}
                    >
                      {option}
                    </Option>
                  ))}
                </Options>
              )}
            </SelectContainer>
          </SelectBox>

          {/* <SelectBtn onClick={hadleFillter}>FILTER</SelectBtn> */}
        </UpcomingMatchBottom>
      </UpcomingMatchMain>
    </UpcomingMatchContainer>
  );
};

export default UpcomingMatches;
