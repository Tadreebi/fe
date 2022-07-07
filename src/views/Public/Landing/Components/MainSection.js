import React from "react";
import Home from "./Sections/Home";
import Overview from "./Sections/Overview";
import Features from "./Sections/Features";
import Techs from "./Sections/Techs";
import Jobs from "./Sections/Jobs";
import Scholarships from "./Sections/Scholarships";
import Competitions from "./Sections/Competitions";
import Events from "./Sections/Events";
import Sliders from "./Sections/Slider";

const MainSection = () => {
  return (
    <section className="main_sec home_page">
      <Home />
      <Overview />
      <Features />
      <Techs />
      <Jobs />
      {/* <Scholarships />
      <Competitions />
      <Events /> */}
      {/* <Sliders /> */}
    </section>
  );
};

export default MainSection;
