import React from "react";
import PageTitle from "../../components/atoms/PageTitle";
import ContactUsForm from "../../components/forms/ContactUsForm";
import styled from "styled-components";

export const Label = styled.label`
  color: grey;
  font-weight: 500;
`;

const Contact = () => {
  return (
    <div>
      <Label>
        <PageTitle> Contact Us </PageTitle>
        {/* <h2>Company information </h2>
        <br />
        <h3>
          Company Name: Johnsons Financial Management Ltd (Trading as Johnsons
          Chartered Accountants) a company registered in England and Wales
        </h3>
        <h3>Address: 1-2 Craven Road, London, W5 2UA, UK</h3>
        <h3>Phone number: 00 44 (0) 20 8567 3451</h3>
        <h3>Email: mail@johnsonsca.com</h3> */}
      </Label>
      <br />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
