import React from "react";
import {
  DateInfo,
  FixtureTabContent,
  FixtureTabContentBottom,
  FixtureTabContentBottomInfoLogo,
  FixtureTabContentBottomInfoText,
  FixtureTabContentBottomMain,
  FixtureTabContentBottomMainInner,
  FixtureTabContentBottomSub,
  FixtureTabContentTop,
  TabLogo,
  TicketSection,
} from "../../../pages/Fixtures/StyleFixtures";
import Fixturedb from "../../../data/WomenFixturesDb.json";

const WomenAllCompetitionAway = () => {
  return (
    <>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>SEPTEMBER 2024</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["SEPTEMBER 2024"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>OCTOBER 2024</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["OCTOBER 2024"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>NOVEMBER 2024</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["NOVEMBER 2024"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>DECEMBER 2024</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["DECEMBER 2024"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>JANUARY 2025</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["JANUARY 2025"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        {Fixturedb["FEBRUARY 2025"]
          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>MARCH 2025</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["MARCH 2025"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>APRIL 2025</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["APRIL 2025"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
      <FixtureTabContent>
        <FixtureTabContentTop>
          <DateInfo>MAY 2025</DateInfo>
        </FixtureTabContentTop>
        {Fixturedb["MAY 2025"]

          .filter((fixture) => fixture.AwayName === "Manchester City")
          .map((fixture, index) => (
            <FixtureTabContentBottom key={fixture.id}>
              <FixtureTabContentBottomInfoText>
                <FixtureTabContentBottomInfoLogo
                  logo={fixture.typelogo}
                ></FixtureTabContentBottomInfoLogo>
                <div>
                  <div>{fixture.date}</div>
                  <p>{fixture.typetext}</p>
                </div>
              </FixtureTabContentBottomInfoText>
              <FixtureTabContentBottomMain>
                <FixtureTabContentBottomMainInner>
                  <div>
                    {fixture.HomeName}
                    <TabLogo logo={fixture.Homelogo}></TabLogo>
                  </div>
                  <div className="middle">
                    <p>{fixture.Time}</p>
                    <i>KST</i>
                  </div>
                  <div>
                    <TabLogo logo={fixture.Awaylogo}></TabLogo>
                    {fixture.AwayName}
                  </div>
                </FixtureTabContentBottomMainInner>
                {fixture.Sub === "" ? null : (
                  <FixtureTabContentBottomSub>
                    {fixture.Sub}
                  </FixtureTabContentBottomSub>
                )}
              </FixtureTabContentBottomMain>
              <TicketSection>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                  </svg>
                  {fixture.Ticket}
                </div>
                {fixture.Ticket === "Coming soon" ? null : (
                  <div className="btn"> {fixture.TicketBtn}</div>
                )}
              </TicketSection>
            </FixtureTabContentBottom>
          ))}
      </FixtureTabContent>
    </>
  );
};

export default WomenAllCompetitionAway;
