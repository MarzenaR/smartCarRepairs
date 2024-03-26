import React from "react";
import Heading from "../../components/atoms/Heading";
import AboutSection from "./AboutSection";
import AboutSectionWithIcons from "./AboutSectionWithIcons";

const Home = () => {
  return (
    <>
      <Heading headingType="h1">Book your car repair now</Heading>
      <AboutSection />
      <AboutSectionWithIcons />
    </>
  );
};

export default Home;
