import React from "react";
import Heading from "../../components/atoms/Heading";
import carMechanicImg from "../../assets/images/carMechanic.jpg";
import { AboutSectionWrapper, LeftCol } from "./styles/StyledAboutSection";

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <LeftCol>
        <Heading headingType="h2">
          A solution to book a car repair effortlessly.
        </Heading>
        <p className="col-desc">
          Thanks for visiting our website. We can complete the vast majority of
          bodywork related tasks in a short turnaround and we welcome retail
          work as well as trader enquiries. We have specialised equipment which
          enable us to take on the jobs some other bodyshops turn away.
        </p>
      </LeftCol>
      <img src={carMechanicImg} alt="car mechanic" className="about-img" />
    </AboutSectionWrapper>
  );
};

export default AboutSection;
