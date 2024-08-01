import React from "react";
import { Link } from "react-router-dom";

const NoResultMatches = () => {
  return (
    <div
      style={{
        paddingBottom: "48px",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "20px",
      }}
    >
      <div>
        Currently no Matches.
        <br />
        <br />
        Visit the{" "}
        <Link
          to="/news"
          style={{
            fontWeight: "700",
            textDecoration: "underline",
            marginRight: "5px",
          }}
        >
          News
        </Link>
        for the latest news and information on Manchester City.
        <br />
      </div>
    </div>
  );
};

export default NoResultMatches;
