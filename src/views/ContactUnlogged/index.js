import React from "react";
import PageTitle from "../../components/atoms/PageTitle";
import ContactUsForm from "../../components/forms/ContactUsForm";
import styled from "styled-components";
import { BackButton } from "./StyledContactUnlogged";

export const Label = styled.label`
  color: grey;
  font-weight: 500;
`;

const ContactUnlogged = () => {
  return (
    <div>
      <br />
      <ContactUsForm />
      <Label>
        <BackButton
        //   style={{ justifyContent: "center", alignItems: "center", display: "flex" }}
        >
          <PageTitle> Back </PageTitle>
        </BackButton>
      </Label>
    </div>
  );
};

export default ContactUnlogged;
