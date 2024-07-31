import React from "react";
import {
  Logo,
  MenTablesContainer,
  MenTablesList,
  MenTablesLogo,
  MenTablesRank,
  MenTablesSection,
  SubText,
} from "./StyleMenTables";
import tableDb from "../../../data/WomenTable.json";
const WomenTables = () => {
  return (
    <MenTablesContainer>
      <MenTablesLogo logo="https://www.mancity.com/meta/media/2l3h4hu4/bwsl_master_horizontal_badge_rgb.png" />
      <MenTablesSection>
        <MenTablesRank className="header">
          <li></li>
          <li>-</li>
          <li>Team</li>
          <li>P</li>
          <li>W</li>
          <li>D</li>
          <li>L</li>
          <li>GF</li>
          <li>GA</li>
          <li>GD</li>
          <li className="headerPts">Pts</li>
          <li>Form</li>
        </MenTablesRank>
        <MenTablesList>
          {tableDb.table.map((list, index) => (
            <MenTablesRank key={list.id} className="women">
              <li>{list.id}</li>
              <li>-</li>
              <li>
                <Logo logo={list.logo}></Logo>
                {list.team}
              </li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li></li>
            </MenTablesRank>
          ))}
        </MenTablesList>
      </MenTablesSection>
      <SubText>Last updated: 22 July 2024</SubText>
    </MenTablesContainer>
  );
};

export default WomenTables;
