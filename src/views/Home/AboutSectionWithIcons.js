import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import Heading from "../../components/atoms/Heading";
import { Item, ItemWrapper } from "./styles/StyledAboutSectionWithIcons";
import { FaTools, FaBrush } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";

const sectionData = [
  {
    icon: <FaTools style={{ fontSize: "40px" }} />,
    title: "Mechanical Repairs",
    content:
      "From logbook servicing to major engine rebuilds, you can expect honest and superior service at Smart Auto Repairs.",
  },
  {
    icon: <FaBrush />,
    title: "Body Paint",
    content:
      "We are specialising in paint, dent removal, scuffs, alloy wheel repair and large body repairs",
  },
  {
    icon: <GiFlatTire />,
    title: "Tyre and Battery Replacement",
    content: "Get the best care so that you can get back on the road faster.",
  },
];

const AboutSectionWithIcons = () => {
  return (
    <ItemWrapper>
      {sectionData.map(({ icon, title, content }, idx) => (
        <Item key={idx}>
          <span className="icon">{icon}</span>
          <Heading headingType="h3">{title}</Heading>
          <p className="content">{content}</p>
        </Item>
      ))}
    </ItemWrapper>
  );
};

export default AboutSectionWithIcons;
