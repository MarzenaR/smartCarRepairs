import React from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { contactUsFormElements } from "../formElementsData";
import FormElement from "../../atoms/FormElement";
import { StyledForm } from "../styled";
import { contactUsFormValidationSchema } from "../../../utils/validationSchema";
import emailjs from "@emailjs/browser";
import {
  TextArea,
  Label,
  FormWrapper,
  ButtonWrapper,
} from "./StyledContactUsForm";
import { FormElementWrapper } from "../../atoms/FormElement/StyledFormElement";

const ContactUsForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        surname: "",
        email: "",
        message: "",
      }}
      validationSchema={contactUsFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        emailjs
          .send(
            "service_01on17l",
            "template_lkb8kut",
            values,
            "rTGNMzIi6w2a7Gmsg"
          )
          .then((res) => {
            resetForm();
          })
          .catch((err) => {});
      }}
    >
      {(props) => (
        <FormWrapper>
          <StyledForm>
            <FormElementWrapper>
              {contactUsFormElements.map((el) => (
                <FormElement
                  inputName={el.inputName}
                  inputType={el.inputType}
                  labelContent={el.labelContent}
                  isDisabled={el.disabled}
                />
              ))}
              <Label>Message</Label>
              <TextArea
                onChange={props.handleChange}
                value={props.values.message}
                name="message"
              ></TextArea>
            </FormElementWrapper>
            <ButtonWrapper>
              <Button type="submit">Send</Button>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default ContactUsForm;
