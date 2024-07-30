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
import tableDb from "../../../data/MenTableDb.json";
const MenTables = () => {
  return (
    <MenTablesContainer>
      <MenTablesLogo />
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
            <MenTablesRank key={list.id}>
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
      <SubText>Last updated: 17 July 2024</SubText>
    </MenTablesContainer>
  );
};

export default MenTables;
