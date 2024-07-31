import React from "react";
import { Link } from "react-router-dom";

const AcademyTables = () => {
  return (
    <div style={{ paddingBottom: "48px" }}>
      Currently no tables.
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
  );
};

export default AcademyTables;
