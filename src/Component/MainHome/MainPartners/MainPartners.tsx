import React, { useEffect, useState } from "react";
import { MainPartnersSection, PartnerImg } from "./StylePartners";

const MainPartners = () => {
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
    <MainPartnersSection scroll={scrollY}>
      <PartnerImg img="https://mediacdn.mancity.com/cf/media/swhk04qh/1910038804257996868-hp-etihad-resize_v2.jpg"></PartnerImg>
      <PartnerImg img="https://tpc.googlesyndication.com/simgad/12663735580408951858?"></PartnerImg>
      <PartnerImg img="https://tpc.googlesyndication.com/simgad/15412703835396025315?"></PartnerImg>
    </MainPartnersSection>
  );
};

export default MainPartners;
