import React from "react";
import Heading from "../../components/atoms/Heading";
import Logo from "../../components/atoms/Logo";

const Welcome = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <Heading headingType="h1">
        <Logo size="large" />
        <br />
        <br />
        Thank you for your registration with our garage <br />
        Your account will be active within 24 hours.
      </Heading>
    </>
  );
};

export default Welcome;
